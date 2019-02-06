import React from 'react'
import Slide from 'react-reveal/Slide'
import Marker from '../assets/marker.svg'
import { globalHistory } from '@reach/router'

const styles = {
  header: {
    textAlign: "center",
    // paddingTop: "55px",
    maxWidth: 200
  },
  headerTitle: {
    color: "#0076ff",
    fontSize: ".9em",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 100,
    backgroundColor: "rgba(255,255,255, 0.2)",
    padding: "6px",
    borderRadius: "5px"
  },
  icon: {
    height: "14px",
    marginRight: "10px"
  },
}



function isBarlist(path){
  if (path === "/bars"){
    return (
      <h1 style={styles.headerTitle}>
        <img src={Marker} style={styles.icon} alt="" />
        St Augustine
      </h1>
    )
  } 
  return
}

function TopLabel({ location }) {
  return (
    <Slide top>
      {isBarlist(globalHistory.location.pathname)}      
    </Slide>
  )
}
export default TopLabel