import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Map from "../components/map";
import Bounce from "react-reveal/Bounce";
import Slide from 'react-reveal/Slide'

// 🔔 LANDING PAGE 🔔

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  landingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },

  bridge: {
    height: 100
    // backgroundColor: "#fff"
  }
};
const Landing = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          highlight: file(relativePath: { eq: "staug1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        return (
          // <div style={styles.landingContainer}>
          <>
            <div
              style={{
                position: "absolute",
                top: 150,
                zIndex: 1,
                // border: "1px solid red",
                display: "flex",
                width: "100%",
                justifyContent: 'center'
              }}
            >
              <Slide left>
                <h1 style={{ color: "#34CDFA", fontFamily: 'Roboto, sams-serif', fontWeight: 100, backgroundColor: 'rgba(0,0,0,0.5)', padding: '5px 10px'}}>Highlight of the day!</h1>
              </Slide>
            </div>
            <Img
              fluid={data.highlight.childImageSharp.fluid}
              alt={"highlight"}
            />
          </>
        );
      }}
    />
  );
};

const Bridge = props => {
  return (
    <div style={styles.bridge}>
      {/* <Newsletter/> */}
      <div
        style={{
          // border: "1px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%"
        }}
      >
        <Bounce cascade>
          <h1
            style={{
              fontFamily: "ZCOOL KuaiLe, cursive",
              fontSize: 40,
              color: "#222",
              textShadow: " 2px 2px #ccc",
              letterSpacing: 1
            }}
          >
            Discover
          </h1>
        </Bounce>
      </div>
    </div>
  );
};

export default () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100"
          rel="stylesheet"
        />
      </Helmet>

      <Layout title={`Happy Hour`}>
        <div style={{ height: 50 }} />
        <Landing />
        <Bridge />
        <Map />
      </Layout>
    </>
  );
};
