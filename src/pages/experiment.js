import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { FixedSizeList as List } from "react-window";
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const styles = {
  container: {
    // backgroundColor: "papayawhip"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
    color: "rgba(14,30,37,.54)",
    margin: 10,
    height: 'auto',
    overflow: 'hidden'
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // fontSize: 40,
    // textAlign: "center"
  },
  cardLabel: {
    padding: "15px 29px",
    border: "1px solid gray",
    borderRadius: 100
  },
  cardSubContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    // border: '1px solid red',
    height: 32,
    display: "flex",
    alignItems: "center"
  },
  cardSubLabelContainer: {
    fontSize: ".80em",
    padding: 0,
    margin: 0,
    height: "30px",
    // border: '1px solid green',
    fontFamily: "Quicksand, sans-serif",
    textTransform: "uppercase",
    color: "#333",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  cardSubLabel: {
    display: "flex",
    width: "100%",
    fontWeight: '700'
    // border: "1px solid blue"
  },
  cardSubPrice: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    color: "#222",
    border: "2px solid #ccc",
    padding: "6px 15px",
    borderRadius: "15px",
    width: "60px"
  }
};
const Column = ({ index, style }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          seabass: file(relativePath: { eq: "seabass.png"}) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        // console.log(data.seabass.childImageSharp.fluid)
        const seabass = data.seabass.childImageSharp.fluid
        const lst = [seabass, seabass, seabass, seabass, ]
        // console.log(seabass)
        return (
          <div style={style}>
          
            {/* <div style={styles.card}> */}
            <div style={styles.card}>

              <Img fluid={lst[index]}/>
            </div>
              {/* <p style={styles.cardLabel}>T</p> */}
            {/* </div> */}
      
            <div style={styles.cardSubContainer}>
              <div style={styles.cardSubLabelContainer}>
                <div style={styles.cardSubLabel}>
                  Moe Shida
                </div>
                <div style={styles.cardSubPrice}>$ 28.95</div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
};

function ListComp({ width }) {
  return (
    <div style={{ padding: 0 }}>
      <List
        direction="horizontal"
        height={500}
        itemCount={4}
        itemSize={width * 0.9}
        width={width}
        style={styles.container}
      >
        {Column}
      </List>
    </div>
  );
}



export default function Experiment(props) {
  const { width } = props;
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="house water systems, filtration, purification"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand:700|Roboto:100|ZCOOL+KuaiLe"
          rel="stylesheet"
        />
      </Helmet>
      <Layout title="Experimental">
        {/* Padding Top */}
        <div style={{ height: 50 }} />
        <ListComp width={width} />
      </Layout>
    </div>
  );
}
