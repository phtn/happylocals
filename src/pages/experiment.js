import React, { } from "react";
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    textAlign: 'center',
  },
  cardLabel: {
    padding: '15px 29px',
    border: '1px solid gray',
    borderRadius: 100
  },
  cardSubContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    // border: '1px solid red',
    height: 25,

  },
  cardSubLabel: {
    fontSize: '.80em',
    padding: 0,
    margin: 0,
    lineHeight: '25px',
    // border: '1px solid green',
    fontFamily: "Open Sans, sans-serif",
    textTransform: 'uppercase',
    color: '#333'
  },
  cardSubPrice: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 100,
    float: 'right',
    color: '#222'
  }
};
const Column = ({ index, style }) => (
  <div
    style={style}
  >
    <div style={styles.card}>
      <p style={styles.cardLabel}>{index + 1}</p>
    </div>
    
    <div style={styles.cardSubContainer}>
      <h1 style={styles.cardSubLabel}>
        Chilean Seabass <span style={styles.cardSubPrice}>$ 24.95</span>
      </h1>
    </div>
  </div>
);

function ListComp({ width }) {
    
  return (
    <div style={{padding: 0}}>
      <List
        direction="horizontal"
        height={257}
        itemCount={10}
        itemSize={width * .9}
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
