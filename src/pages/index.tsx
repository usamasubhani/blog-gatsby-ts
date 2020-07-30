import * as React from 'react';
import { Link, graphql, useStaticQuery, navigate } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentfulRichText from '../components/contentfulRichText';
import Footer from '../components/footer';

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
       <div className="posts-container">
        {documents.map(node => {
          console.log(node.json)
          return (
            <div key={node.id} className="post-link-container" onClick={() => {navigate(`/${node.slug}`)}}>
              <Link className="post-link"
              to={`/${node.slug}`} 
              key={`${node.id}-title`}>
                {node.title}
              </Link>
              <ContentfulRichText 
                document={node.json.content[0]}
                />
            </div>
          );
        })}
      </div>
      <Footer/>
    </Layout>
  )
}

export default BlogPosts;


