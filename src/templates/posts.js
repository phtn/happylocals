import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

const styles = {
  container: {
    // margin: 20,
    padding: 20,
    // fontFamily: ', sans-serif'

    color: "#333"
  },
  blogTitle: {
    fontFamily: "Quicksand, sans-serif",
    color: "#555"
  },
  headerContainer: {
    textAlign: "center"
  },
  header: {
    // color: "#003366"
    color: '#222'
  },
  author: {
    textTransform: "uppercase",
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    fontWeight: "bolder"
  },
  content: {
    // textAlign: "justify",
    fontSize: "1.2em",
    lineHeight: "28px",
    fontFamily: "Open Sans, sans-serif"
  },
  by: {
    fontSize: 12,
    fontFamily: "serif",
    marginRight: 10
  }
};

const Header = props => {
  // console.log(doc)
  const { title } = props
  return (
    <div style={styles.headerContainer}>
      <h1 style={styles.header}>{title}</h1>
      <hr />
    </div>
  );
};

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const { title } = post.frontmatter;
  // console.log(typeof post)
  const handleMouseDown = () => console.log('test')
  return (
    <div style={styles.container}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100"
          rel="stylesheet"
        />
      </Helmet>
      <Header title={title}/>
      <h1 style={styles.blogTitle}>{title}</h1>
      
      <div
        onMouseDown={handleMouseDown}
        onDragCapture={handleMouseDown}
        style={styles.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
}

export const postQ = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
      }
    }
  }
`;
