import React, { useState, useEffect, Children, cloneElement } from 'react'
import Logo from "../assets/chronometer.svg";
import Navbar from './navbar';
import Footer from './footer'
import '../index.css'
import Metatags from './metatags';

// const WINDOW_HEIGHT = window.innerHeight
// const WINDOW_WIDTH = window.innerWidth
// console.log(WINDOW_HEIGHT)

const styles = {
  container: {
    // margin: 0
  }
}

const Layout = ({children, title}) => {

  const getInitialPad = () => {
    if (typeof global !== 'undefined' && global.innerWidth > 650){
      return 200
    } else {
      return 0
    }
  }
  const getInitialBrand = () => {
    if (typeof global !== 'undefined' && global.innerWidth > 650){
      return 'Happy Hour'
    } else {
      return ''
    }
  }
  const [width, setWidth] = useState(typeof global !== 'undefined' && global.innerWidth)
  const [navPad, setNavPad] = useState(getInitialPad())
  const [brand, setBrand] = useState(getInitialBrand)
  

  useEffect(()=> {
    const handleWidthResize = () => setWidth(global.innerWidth)
    global.addEventListener('resize', handleWidthResize)

    const handleNavPad = (pad) => setNavPad(pad)
    const handleShowBrand = (brand) => setBrand(brand)

    document.title = title

    if (width > 650){
      handleNavPad(200)
      handleShowBrand('Happy Hour')
    } else {
      handleNavPad(0)
      handleShowBrand('')
    }

    return () => (typeof global !== 'undefined' && global.removeEventListener('resize', handleWidthResize))
  }, [width, navPad, brand])

  const childrenWithProps = Children.map(children, child => cloneElement(child, {pad: navPad}))

  return (
    <div style={styles.container}>
      
      <Metatags title={brand}/>
      <Navbar pad={navPad} width={width} brand={brand} logo={Logo}/>
      
      {childrenWithProps}

      <footer>
        <Footer pad={navPad} brand={brand} logo={Logo}/>
      </footer>

    </div>
    
  )
}
export default Layout
  
