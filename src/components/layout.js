import React, { useState, useEffect, Children, cloneElement, Fragment } from 'react'
import Logo from "../assets/chronometer.svg";
import Navbar from './navbar';
import Footer from './footer'
import '../index.css'
import Metatags from './metatags';
import { globalHistory } from '@reach/router'

// 🐲 MASTER LAYOUT 🐲



const Layout = ({children, title }) => {

  const getInitialPad = () => {
    if (typeof global !== 'undefined' && global.innerWidth > 750){
      return 200
    } else {
      return 0
    }
  }
  const getInitialBrand = () => {
    if (typeof global !== 'undefined' && global.innerWidth > 750){
      return 'Locals Happy Hour'
    } else {
      return ''
    }
  }
  const [width, setWidth] = useState(typeof global !== 'undefined' && global.innerWidth)
  const [navPad, setNavPad] = useState(getInitialPad())
  const [brand, setBrand] = useState(getInitialBrand)
  

  useEffect(()=> {
    const handleWidthResize = () => setWidth(typeof global !== 'undefined' && global.innerWidth)
    global.addEventListener('resize', handleWidthResize)

    const handleNavPad = (pad) => setNavPad(pad)
    const handleShowBrand = (brand) => setBrand(brand)

    document.title = title

    if (width > 750){
      handleNavPad(200)
      handleShowBrand('Locals Happy Hour')
    } else {
      handleNavPad(0)
      handleShowBrand('')
    }

    return () => global.removeEventListener('resize', handleWidthResize)
  }, [width, navPad, brand])

  const childrenWithProps = Children.map(children, child => cloneElement(child, {pad: navPad, location: globalHistory.location.pathname, width: width}))
  // console.log(global.innerWidth)
  return (
    <Fragment>
      
      <Metatags title={brand}/>
      <Navbar pad={navPad} width={width} brand={brand} logo={Logo} location={globalHistory.location.pathname}/>
      
      {childrenWithProps}

      <footer>
        <Footer pad={navPad} brand={brand} logo={Logo}/>
      </footer>

    </Fragment>
    
  )
}
export default Layout
  
