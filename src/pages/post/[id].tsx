import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { fetchData } from "../../../auth-fetcher";
import PostView from "../../components/post/PostView";
import {
  PublicationQuery,
  PublicationQueryVariables,
  PublicationDocument,
} from "../../graphql/generated";

type Props = {
  publication: PublicationQuery;
};


/*
This is a Next.js component for rendering a single post. It exports 3 functions: the default component, getStaticProps, and getStaticPaths.

The default component PostPage takes a publication prop and renders it using the PostView component.
getStaticProps is used for server-side rendering and it asynchronously fetches data for the post using the fetchData function and a GraphQL query PublicationDocument.
It returns an object with a props property, which is the data for the publication prop.
getStaticPaths is used to generate the list of all possible paths for this page. Currently,
it returns an empty paths array and sets the fallback value to "blocking". It looks like this function needs to be implemented to fetch all post IDs.
*/
export default function PostPage({ publication }: Props) {
  return <PostView publication={publication} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;

  const publicationQueryResult = await fetchData<
    PublicationQuery,
    PublicationQueryVariables
  >(PublicationDocument, {
    request: {
      publicationId: id,
    },
  })();

  return {
    props: {
      publication: publicationQueryResult,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: Hmmmmmmmmmmmmmmmm get all post IDs from a query or smthng?
  // For now, just return nothing
  return {
    paths: [],
    fallback: "blocking",
  };
};
