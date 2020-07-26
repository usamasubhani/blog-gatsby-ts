import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentfulRichText from '../components/contentfulRichText';

export const query = graphql`
  query BlogPagesQuery {
    allContentfulBlogPost(limit: 10) {
      edges {
        node {
          id
          slug
          title
          updatedAt
          body {
            json
          }
        }
      }
    }
  }
`;

type Props = {
  data: any;
};

const BlogPosts = ({data}: Props) => {
  
  const documents = data.allContentfulBlogPost.edges
    .filter(edge => edge.node.body)
    .map(edge => {
      const { id, title, slug } = edge.node;
      const { json } = edge.node.body || { json: {} };
      return { id, title, slug, json };
    });

  return (
    <Layout>
       <SEO title="Blog Posts" />
       <h1>Blog Posts</h1>
       {documents.map(node => {
        return (
          <div key={node.id}>
            <Link to={`/${node.slug}`} key={`${node.id}-title`}>{node.title}</Link>
          </div>
        );
      })}
    </Layout>
  )
}

export default BlogPosts;


