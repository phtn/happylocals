import React, { useState, useEffect, Children, cloneElement } from 'react'
import Logo from "../../static/sea.svg";
import Navbar from './navbar';
// import { Helmet } from 'react-helmet'
import Footer from './footer'
import '../index.css'
import Metatags from './metatags';
const styles = {
  container: {
    margin: 0
  }
}

const Layout = ({children, title}) => {

  const getInitialPad = () => {
    if (typeof global !== 'undefined' && global.innerWidth > 650){
      return 100
    } else {
      return 10
    }
  }
  const getInitialBrand = () => {
    if (typeof global !== 'undefined' && global.innerWidth > 650){
      return 'WWWater'
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
      handleNavPad(100)
      handleShowBrand('WWWater')
    } else {
      handleNavPad(10)
      handleShowBrand('')
    }

    return () => (typeof global !== 'undefined' && global.removeEventListener('resize', handleWidthResize))
  }, [width, navPad, brand])

  const childrenWithProps = Children.map(children, child => cloneElement(child, {pad: navPad}))

  return (
    <div style={styles.container}>
      
      <Metatags title={brand}/>
      <Navbar pad={navPad} brand={brand} logo={Logo}/>
      
      {childrenWithProps}

      <footer>
        <Footer pad={navPad} brand={brand} logo={Logo}/>
      </footer>

    </div>
    
  )
}
export default Layout
  
