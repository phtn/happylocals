import React from "react";
// import { Trail, Spring } from "react-spring";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from "gatsby";
import Hourglass from "../assets/hourglass.svg";
import Cobalt from "../assets/cobalt-lounge.jpg";
import TiniMartini from "../assets/tini-martini.jpg";
import StaugDist from "../assets/staug-dist.jpg";
import Wing from "../assets/black-gallon.svg";
import Spear from "../assets/spear.svg";
import Play from '../assets/stack.svg'
const styles = {
  container: {
    // backgroundColor: "#fff",
    // borderRadius: "5px",
    // boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
    color: "rgba(14,30,37,.54)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // marginTop: "24px",
    minWidth: "264px",
    padding: "0px 24px 24px 30px",
    // backgroundImage: `url(${Cobalt})`,
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"
    // height: "auto",
    // minHeight: 350,
  },
  header: {
    textAlign: "center",
    paddingTop: "55px"
    // backgroundColor: '#fff',
  },
  headerTitle: {
    color: "#0076ff",
    fontSize: "1em",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 100,
    backgroundColor: "#fff",
    padding: "5px",
    borderRadius: "5px"
  },
  cardTitle: {
    fontFamily: "ZCOOL KuaiLe, cursive",
    fontSize: "24px",
    letterSpacing: 1,
    lineHeight: "24px",
    color: "#333",
    textShadow: " 2px 2px #ccc",
    // backgroundColor: '#fff',
    textAlign: "center"
    // border: '1px solid red'
  },
  // hr: {
  //   backgroundColor: "#eee",
  //   height: 3,
  //   width: "100%",
  //   marginBottom: 30,
  //   marginTop: "-5px",
  //   border: "none"
  // },
  btn: {
    marginTop: "40px",
    padding: "5px 10px",
    // height: "2.5rem",
    // lineHeight: "2.5pxrem",
    borderRadius: "100px",
    border: '2px solid rgba(238,238,238, 0.5)',
    // backgroundImage: "linear-gradient(to right, #34CDFA, #E8D9F1)",
    // background: "rgb(0,118,255)",
    boxShadow: "0 4px 14px 0 rgba(0,118,118,0.5)",
    // textShadow: " 2px 1px #999",
    textTransform: 'uppercase',
    color: "#222",
    // border: "none",
    // fontFamily: "Roboto, sans-serif",
    // fontWeight: 100,
    // fontSize: 16,
    textDecoration: "none",
    textAlign: "center",
    float: "right",
    // textTransform: "uppercase",
    // letterSpacing: 1,
    // width: 200,
    position: "relative",
    opacity: 1,
    maxWidth: 200
  },
  icon: {
    height: "12px",
    marginRight: "10px"
    // border: '1px solid green'
  },
  author: {
    marginTop: "0px",
    fontSize: 12,
    fontFamily: "Quicksand, sans-serif",
    opacity: 1
  },
  read: {
    fontSize: 10,
    fontFamily: "Quicksand, sans-serif"
  },
  hourglass: {
    height: 10,
    float: "left",
    marginRight: 10,
    opacity: 0.7
  },
  description: {
    marginTop: "-12px",
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bolder",
    fontFamily: "Roboto, sans-serif",
    letterSpacing: 1,
    color: "#fff"
  },
  leftWing: {
    transform: `rotate(90deg)`,
    margin: "0px 10px"
  },
  rightWing: {
    transform: `rotate(-90deg)`,
    margin: "0px 10px"
  },
  spear: {
    transform: `rotate(45deg)`,
    // position: "relative"
    display: "inline-block",
    // border: '1px solid red',
    marginTop: "-37px"
  }
};

const imageList = [StaugDist, TiniMartini, Cobalt];

const Extra = props => {
  const { author, createdAt, description, readTime } = props;
  // console.log(props)
  return (
    <div>
      <p style={Object.assign({}, styles.description)}>{description}</p>

      <p style={styles.author}>
        <strong>{author}</strong> &middot; {createdAt}
      </p>
      <div>
        <img src={Hourglass} style={styles.hourglass} alt="hg" />
        <p style={styles.read}>{readTime}</p>
      </div>
    </div>
  );
};

const Card = props => {
  const {
    id,
    title,
    path,
    author,
    description,
    createdAt,
    // avatar,
    readTime,
    logo,
    image,
    pad,
    buttonTitle
  } = props;
  return (
    <Fade>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img src={Wing} style={styles.leftWing} height="10" alt="left-wing" />
        <Bounce>
          <h3 style={Object.assign({}, styles.cardTitle)}>{title}</h3>
        </Bounce>
        <img src={Wing} style={styles.rightWing} height="10" alt="right-wing" />
      </div>
      <LightSpeed left>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <img src={Spear} style={styles.spear} height="50" alt="spear" />
        </div>
      </LightSpeed>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: '-25px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 100,
          textTransform: 'uppercase',
          letterSpacing: '2',
          fontSize: 12,
          // color: '#34CDFA'
        }}
      >
        <p>{description}</p>
      </div>
      <div
        style={Object.assign({}, styles.container, {
          margin: `0px ${pad + 0}px 30px ${pad + 0}px`,
          backgroundImage: `url(${imageList[id]})`
        })}
      >
        <div
          style={{
            // backgroundColor: "rgba(0,0,0,0.5)",
            maxWidth: "300px",
            textAlign: "center",
            height: "100%"
          }}
        >
          <div
            style={{
              // display: "flex",
              textAlign: "center"
              // justifyContent: 'center',
            }}
          >
            <Extra
            // author={author}
            // createdAt={createdAt}
            // readTime={readTime}
            // description={description}
            />
            <div />
            {/* <
            hr style={styles.hr} /> */}
            <img src={logo} alt="" width={"275"} />
            {/* <img src={image} alt="" width={"275"} /> */}
            <Link
              style={styles.btn}
              to={path}
              onMouseEnter={e =>
                (e.target.style.backgroundColor = "rgb(0,132,255)")
              }
              onMouseLeave={e =>
                (e.target.style.backgroundColor = "rgb(0,118,255)")
              }
            >
              <img src={Play} width={40} alt='play'/>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

const BlogList = props => {
  const { items, pad, headerTitle, buttonTitle, icon } = props;
  return (
    <>
      <div
        style={Object.assign({}, styles.header, {
          paddingLeft: `${pad + 10}px`,
          paddingRight: `${pad + 10}px`
        })}
      >
        <h1 style={styles.headerTitle}>
          <img src={icon} style={styles.icon} alt="" /> {headerTitle}
        </h1>
      </div>

      {items.map(item => (
        <Card
          key={item.node.id}
          id={item.node.frontmatter.id}
          title={item.node.frontmatter.title}
          path={item.node.frontmatter.path}
          author={item.node.frontmatter.author}
          createdAt={item.node.frontmatter.createdAt}
          description={item.node.frontmatter.description}
          avatar={item.node.frontmatter.avatar}
          readTime={item.node.frontmatter.readTime}
          // animate={animate}
          pad={pad}
          logo={item.logo}
          // image={image}
          buttonTitle={buttonTitle}
        />
      ))}
    </>
  );
};
export default BlogList;
