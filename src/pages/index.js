import React from 'react'
import Layout from '../components/layout';
import ClearWater from '../assets/clear-water.mp4';
import Helmet from 'react-helmet'
import Newsletter from '../components/newsletter';
import Highlight from '../assets/staug1.jpg'

import Map from '../components/map'


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  landingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  
  bridge: {
    height: 100,
    backgroundColor: "#fff"
  }
}
const Landing = props => {
 
  
  return (
    <div style={styles.landingContainer}>
      <img src={Highlight} width={'100%'} alt={'highlight'} />
      {/* <video id='landingVideo' muted autoPlay loop width='100%'>
        <source src={ClearWHighlightater} />
      </video> */}
      
    </div>
  )
}

const Bridge = props => {
  return(
    <div style={styles.bridge}>
        <Newsletter/>
    </div>
  )
}

export default () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100" rel="stylesheet"/>
      </Helmet>

      <Layout title={`Happy Hour`}>
  
        <Landing/>
        <Bridge/>
        <Map />
      </Layout>
    </>
  )
}