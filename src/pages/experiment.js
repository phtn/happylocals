import React, { } from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { FixedSizeList as List } from "react-window";
// import Slide from 'react-reveal'

const styles = {
  container: {
    backgroundColor: "papayawhip"
  }
};
const Column = ({ index, style }) => (
  <div
    style={Object.assign({}, style, {
      paddingTop: 100,
      textAlign: 'center',
      backgroundColor: index % 2 === 0 ? "tomato" : "papayawhip",
    })}
  >
    Column {index}
  </div>
);

function ListComp({ width }) {
    
  return (
    <List
      direction="horizontal"
      height={155}
      itemCount={10}
      itemSize={width * .9}
      width={width}
      style={styles.container}
    >
      {Column}
    </List>
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
