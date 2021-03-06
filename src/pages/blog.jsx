/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from '../utils/deepGet';

import BlogList from '../components/BlogList';
import Layout from '../components/Layout';

const BlogIndex = ({ data, location }) => {
  const siteTitle = get(['site', 'siteMetadata', 'title'], data);
  const siteDescription = get(['site', 'siteMetadata', 'description'], data);
  const posts = get(['allMarkdownRemark', 'edges'], data);

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Blog | ${siteTitle}`}
      />
      <h2>Blog</h2>
      {posts && posts[0] ? (
        <BlogList posts={posts} title="Blog" />
      ) : (
        <p>Blog posts coming soon. Watch this space!</p>
      )}
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" }, draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            type
          }
        }
      }
    }
  }
`;
