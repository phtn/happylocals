import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
// import './styles.css'

const styles = {
    container: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 1,
        color: 'white',
        fontSize: 28,
        width: 'inherit',
        // fontFamily: '-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif',
        fontFamily: "ZCOOL KuaiLe, cursive",
        fontWeight: 'bolder',
        letterSpacing: 2,
        textTransform: 'uppercase',
        textAlign: 'center',
        
        // paddingTop: 25 

        // border: '1px solid red'
    },
    text: {
        padding: 20
    }
}

const items = ['Highlight', 'of', 'the', 'month']
const config = { mass: 5, tension: 2000, friction: 200 }

function Hightlight({ width }) {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 10,
    height: toggle ? 35 : 0,
    // marginTop: toggle ? 30 : 0,
    color: toggle ? '#E8D9F1' : '#FFFFFF',
    from: { opacity: 0, x: 20, height: 0 },

  })
  // const { text } = styles
  return (
    <div style={styles.container} onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, marginTop, ...rest }, index) => (
          <animated.div
            key={items[index]}
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height, width: width, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgba(0,0,0,0.5)', }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
export default Hightlight