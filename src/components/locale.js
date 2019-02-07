import React from 'react'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade' 
import Marker from '../assets/marker.svg'


const styles = {
  header: {
    textAlign: "center",
    // paddingTop: "55px",
    maxWidth: 200
  },
  locale: {
    color: "#0076ff",
    fontSize: ".9em",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 100,
    backgroundColor: "rgba(255,255,255, 0.2)",
    padding: "6px",
    borderRadius: "5px"
  },
  brand: {
    color: "#444",
    letterSpacing: 1,
    fontFamily: "Open Sans, sans-serif",
    fontSize: "12px",
    fontWeight: "bolder",
    textTransform: 'uppercase',
    padding: "6px",
    borderRadius: "5px"
    // fontFamily: "ZCOOL KuaiLe, cursive",
    // textShadow: " 1px 1px #ccc",
    // backgroundColor: "rgba(255,255,255, 0.2)",
  },
  icon: {
    height: "14px",
    marginRight: "10px"
  },
}



function isBarlist(path){
  if (path === "/bars"){
    return (
      <Slide>
        <h1 style={styles.locale}>
          <img src={Marker} style={styles.icon} alt="" />
          St Augustine, FL
        </h1>
      </Slide>
    )
  } 
  return (
    <Fade>
      <h1 style={styles.brand}>
        Locals Happy Hour
      </h1>
    </Fade>
  )
}

function TopLabel({ location }) {
  return (
    <>
      {isBarlist(location)}  
    </>
  )
}
export default TopLabel