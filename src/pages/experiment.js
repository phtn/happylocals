import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { FixedSizeList as List } from "react-window";

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
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    textAlign: "center"
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
    // justifyContent: 'center'
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
const Column = ({ index, style }) => (
  <div style={style}>
    <div style={styles.card}>
      <p style={styles.cardLabel}>{index + 1}</p>
    </div>

    <div style={styles.cardSubContainer}>
      <div style={styles.cardSubLabelContainer}>
        <div style={styles.cardSubLabel}>Chilean Seabass</div>
        <div style={styles.cardSubPrice}>$ 4.95</div>
      </div>
    </div>
  </div>
);

function ListComp({ width }) {
  return (
    <div style={{ padding: 0 }}>
      <List
        direction="horizontal"
        height={257}
        itemCount={10}
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
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100|ZCOOL+KuaiLe"
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
