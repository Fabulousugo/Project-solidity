

# Immunyty<br/>

A decentralized social media  platform built on top of the [Lens Protocol](https://www.lens.xyz/).

- Own your [Profile](https://docs.lens.xyz/docs/profile) as an NFT.<br/>
- Write posts in [markdown](https://www.markdownguide.org/), store them on [IPFS](https://portal.thirdweb.com/storage) and attach them to your profile NFT inside a [mapping](https://docs.soliditylang.org/en/v0.8.17/types.html#mapping-types).<br/>
- View a Personalised [Feed](https://docs.lens.xyz/docs/timeline) of posts from creators you follow.<br/>

# Deployed Contract address<br/>
0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d <br/>
<br/>
<br/>
// Learn how we use the thirdweb SDK to connect to the Lens smart contract using it's ABI: <br/>
// https://blog.thirdweb.com/guides/how-to-use-any-smart-contract-with-thirdweb-sdk-using-abi/ <br/>


# Contract ABI Link <br/>
https://github.com/Fabulousugo/Project-solidity/blob/main/const/abis.ts <br/>

# Polygon Scan address <br/>
https://polygonscan.com/address/0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d
<br/>
<br/>

## **Project Demo**


**You will have to have a lens profile to be able to follow a user**<br/>

https://user-images.githubusercontent.com/113071405/215862009-83dfc57a-2091-40bc-8f41-ec170d6a7e3b.mp4



## **Project Snapshot**<br/>
*Profile Inspection
![1675197552716](https://user-images.githubusercontent.com/113071405/215882034-c95b4eb3-b40d-49de-80e2-918b0e5c4a22.png)
*Homepage
![Screenshot (37)](https://user-images.githubusercontent.com/113071405/214679932-dc41d5f6-a5fb-468e-8cc3-3ff9e078ef3f.png)

Create posts

*![Screenshot (39)](https://user-images.githubusercontent.com/113071405/214679980-e6554cd0-7a2e-4da8-bcdc-32546468d586.png)


* Feeds
![Screenshot (40)](https://user-images.githubusercontent.com/113071405/214680091-75921ae3-44c2-4df7-874b-33fbbe95a8da.png)


*Discover friends
  ![Screenshot (41)](https://user-images.githubusercontent.com/113071405/214680132-20b12f6b-de57-4d18-8495-dd9cfbae2cf4.png)


## **Project Website Link**

- https://immunyty.netlify.app

## **Project Author**

-Fabulousugo
<br/>
<br/>
## **How to Install and Run the Project**

-- Clone the repository
```git
git clone (https://github.com/Fabulousugo/Project-solidity)
```

* Install dependencies
```npm
npm install
```
* Run Project for development
```npm
npm run dev
```
* Run Project for production
```npm
npm run build
npm start
```
<br/>
<br/>
Additional Information:
* __Contract compilation__ : <br><br>
The project contract has been compiled and deployed to the polygon mainnet, we could have used the mumbai testnet, but we wont be able to get the full functionalities required. Also note that interacting with the app uses real money,make sure you understand the implications before you proceed.<br/>


<br/>

## **Tech Stack** <br/>

- [Next.js](https://nextjs.org/): 🐐 React framework for production.

- [TypeScript](https://www.typescriptlang.org/): 🦕 A better JavaScript.

- [Lens Protocol](https://www.lens.xyz/): 📡 Decentralized social graph for storing data for profiles, posts, comments, mirrors, etc.

- [GraphQL & GraphQL Codegen](https://the-guild.dev/graphql/codegen): 📜 Auto-generate strongly typed types and hooks for your GraphQL queries based on the Lens GraphQL schema. See [codegen.yaml](./codegen.yaml) for more details.

- [thirdweb](https://portal.thirdweb.com/sdk): 📦 All things web3.

  - [React SDK](https://portal.thirdweb.com/sdk) to connect to and interact with smart contracts in React hooks.

  - [Storage](https://portal.thirdweb.com/storage) to store files on IPFS.

  - [UI Components](https://portal.thirdweb.com/ui-components) to connect wallets, render content from IPFS, and interact with smart contracts:
    - [Connect Wallet Button](https://portal.thirdweb.com/ui-components/connectwalletbutton)
    - [Web3 Button](https://portal.thirdweb.com/ui-components/web3button)
    - [IPFS Media Renderer](https://portal.thirdweb.com/ui-components/ipfs-media-renderer)

- [Material UI](https://mui.com/): 🎨

- [Tanstack (React) Query](https://tanstack.com/query/v4): 🐶 A powerful, flexible, and extensible data fetching and caching library for React.
  - [@graphql-codegen/typescript-react-query](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query) Auto-generate strongly typed React Query hooks for queries and mutations based on your `.graphql` files. [Demo](https://twitter.com/jarrodWattsDev/status/1602534171284426754).
<br/>
<br/>
<br/>


## **Roadmap** <br/>
  #Note that the Lens protocol is stil in it's developmental stages, therefore it is not yet a fully developed. We will keep working to make the dream of a truly decentralized web3 social media application come TRUE.

- ✅ Sign in with Lens
- ✅ Create a post
  - ❌ Wait for transaction to be indexed
- ✅ View a feed of posts
  - ✅ View a feed of posts from creators you follow
- ✅ View a profile
  - ✅ View a profile's posts
  - ❌ `/profile` route
  - ❌ Edit profile
  - ❌ Delete profile
  - ❌ View profile's followers
  - ❌ View profile's following
- ✅ View an individual post
- ✅ Discover profiles
- ✅ Follow a profile
  - ❌ Follow user who has a follow module setup
- 🚧 Unfollow a profile (Bugged atm)
- ❌ Choose which collection module to use on a post
- ❌ Collect a post
- ❌ View a post's collection info (price, supply, etc.)
- ✅ Add a reaction
  - ❌ Live updating reaction count
- ❌ View post reactions
- ❌ Comment on a post
- ❌ View post comments
- ❌ Mirror a post
- ❌ View a post's mirrors
- ❌ Hide post
- ❌ Report post
- ❌ Search publications
- ❌ Notifications

<br/>
<br/>

## **🔮Usage**
To use this application as your own, follow these simple steps:
<!-- 
>- 
>- 
>-  -->
<ul>
<li><p>

Fork this Repository (`https://github.com/Fabulousugo/Project-solidity.git`)
</p></li>
<li><p>

Install Dependecies (`npm install`)

</p></li>
<li><p>

Run Project (`npm start`)
</p></li>

</ul>

## **🤝Contribute**
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are <strong>greatly appreciated</strong>. 😊
<p>
&emsp;1. Fork Project

</p>
<p>

&emsp;2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
</p>

<p>

&emsp;3. Commit your changes(`git commit -m "Add Some AmazingFeature" `)
</p>

<p>

&emsp;4. Push to the Branch (`git push origin feature/AmazingFeature`)
</p>

<p>
&emsp;5. Open a Pull Request

</p>






<br/>
<br/>
<br/>


## **Implementation Details**

- The project makes use of abis from an already deployed contract, majority of the codes written were for the front-end, locate the src folder. It contains the main.ts, trace out the routes.<br/>

<br/>
<br/>


## **License** <br/>

MIT License

Copyright (c) [2023] [Ugochukwu Precious Onah]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




