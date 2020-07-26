import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ContentfulRichText from "../components/contentfulRichText";

export default function BlogPost({data}: any) {

const post = data.contentfulBlogPost;
  return (
    <Layout>
      <h1>{post.title}</h1>
      <ContentfulRichText 
      document={post.body.json}
      key={post.id} />
    </Layout>
  )
}

export const query = graphql`
query BlogQuery($slug: String!) {
    contentfulBlogPost (slug: {eq: $slug}){
      title
      body {
          json
      }
    }
  }
`;