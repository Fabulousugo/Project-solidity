import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { fetchData } from "../../../auth-fetcher";
import ProfileView from "../../components/profile/ProfileView";
import {
  ProfileDocument,
  ProfileQuery,
  ProfileQueryVariables,
  PublicationsDocument,
  PublicationsQuery,
  PublicationsQueryVariables,
  PublicationTypes,
} from "../../graphql/generated";

type Props = {
  profile: ProfileQuery;
  posts: PublicationsQuery;
};


/*
This is a Next.js component for rendering a profile page. It exports 3 functions: the default component, getStaticProps, and getStaticPaths.

The default component ProfilePage takes two props profile and posts and renders them using the ProfileView component.
getStaticProps is used for server-side rendering and it asynchronously fetches data for the profile and the user's posts using the fetchData function and two GraphQL queries, ProfileDocument and PublicationsDocument.
It returns an object with a props property that contains the data for the profile and posts props.
If the profile is not found, it returns an object with a notFound property set to true.
getStaticPaths is used to generate the list of all possible paths for this page. Currently, it returns an empty paths array and sets the fallback value to "blocking". 
It looks like this function needs to be implemented to fetch all profile handles.
*/

export default function PostPage({ profile, posts }: Props) {
  return <ProfileView profile={profile} posts={posts} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;

  const profileQueryResult = await fetchData<
    ProfileQuery,
    ProfileQueryVariables
  >(ProfileDocument, {
    request: {
      handle: id,
    },
  })();

  if (!profileQueryResult.profile) {
    return {
      notFound: true,
    };
  }

  const publicationsQueryResult = await fetchData<
    PublicationsQuery,
    PublicationsQueryVariables
  >(PublicationsDocument, {
    request: {
      profileId: profileQueryResult.profile?.id,
      metadata: {
        // mainContentFocus: [PublicationMainFocus.Article],
      },
      publicationTypes: [PublicationTypes.Post],
    },
  })();

  return {
    props: {
      profile: profileQueryResult,
      posts: publicationsQueryResult,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: For now, just return nothing
  return {
    paths: [],
    fallback: "blocking",
  };
};
