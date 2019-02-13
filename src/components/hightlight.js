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
        fontSize: 40,
        width: 'inherit',
        border: '2px solid red'
    },
    text: {
        
    }
}

const items = ['Highlight', 'of', 'the', 'month']
const config = { mass: 5, tension: 2000, friction: 200 }

function Hightlight() {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  const { text } = styles
  return (
    <div style={styles.container} onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height, text }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
export default Hightlight