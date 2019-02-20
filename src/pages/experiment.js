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
    fontSize: 40
  },
  cardLabel: {
    padding: '15px 29px',
    border: '1px solid gray',
    borderRadius: 100
  }
};
const Column = ({ index, style }) => (
  <div
    style={Object.assign({}, style, {
      textAlign: 'center',
      // backgroundColor: index % 2 === 0 ? "tomato" : "#ccc",
    })}
  >
    <div style={styles.card}>
      <p style={styles.cardLabel}>{index + 1}</p>
    </div>
  </div>
);

function ListComp({ width }) {
    
  return (
    <div style={{padding: 0}}>
      <List
        direction="horizontal"
        height={222}
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
