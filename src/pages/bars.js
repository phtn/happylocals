import React from "react";
import Layout from "../components/layout";
import BarList from "../components/bar-list";
import MapIcon from '../assets/map-icon.svg'
import { graphql } from "gatsby";
import Helmet from 'react-helmet'

const Blog = ({ data, pad }) => {
  const { allMarkdownRemark: post } = data;

  return (
    <>
      <Helmet>
        <meta name="description" content="house water systems, filtration, purification"/>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100|ZCOOL+KuaiLe" rel="stylesheet"/>
      </Helmet>
      <Layout title="Bars">
        <BarList
          items={post.edges}
          headerTitle={`St. Augustine, FL`}
          title={""}
          buttonTitle={`Read More`}
          pad={pad}
          icon={MapIcon}
          
        />
      </Layout>
    </>
  );
};
export default Blog;

export const getBlogs = graphql`
  query BarsList {
    allMarkdownRemark(
      sort: { fields: [frontmatter___id], order: DESC }
      limit: 5
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            author
            createdAt
            description
            avatar
            readTime
            updatedAt
            source
            id
          }
        }
      }
    }
  }
`;
