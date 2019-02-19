import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { FixedSizeList as List } from 'react-window'

const styles = {
    container: {
        padding: 20
    }
}
const Column = ({ index, style }) => (
    <div style={style}>
      Column {index}
    </div>
  );
  
function ListComp({width}){

    return (
        <List
            direction="horizontal"
            height={175}
            itemCount={1000}
            itemSize={200}
            width={width}
            style={styles.container}
        >
            {Column}
        </List>
    )
}

export default function Experiment(props) {
    const { width } = props
    return (
        <div>
            <Helmet>
                <meta name="description" content="house water systems, filtration, purification"/>
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100|ZCOOL+KuaiLe" rel="stylesheet"/>
            </Helmet>
            
            <Layout title='Experimental'>
                {/* Padding Top */}
                <div style={{ height: 50 }} />
                <ListComp width={width}/>
            </Layout>
            
        </div>
    )
}