import React from "react";
// import { Trail, Spring } from "react-spring";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import Wing from "../assets/black-gallon.svg";
import Spear from "../assets/spear.svg";
import Play from "../assets/stack.svg";

const styles = {
  container: {
    color: "rgba(14,30,37,.54)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minWidth: "264px",
    padding: "0px 24px 24px 30px",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"
  },
  header: {
    textAlign: "center",
    paddingTop: "55px",
    maxWidth: 200
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
    textAlign: "center"
  },
  btn: {
    marginTop: "-130px",

    padding: "5px 10px",
    borderRadius: "100px",
    border: "2px solid rgba(238,238,238, 1.0)",
    boxShadow: "0 4px 14px 0 rgba(0,118,118,0.5)",
    textTransform: "uppercase",
    color: "#222",
    textDecoration: "none",
    textAlign: "center",
    float: "right",
    opacity: 1,
    maxWidth: 200
  },
  icon: {
    height: "14px",
    marginRight: "10px"
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
    display: "inline-block",
    marginTop: "-37px"
  }
};

// const Extra = props => {
//   const { author, createdAt, description, readTime } = props;
//   return (
//     <div>
//       <p style={Object.assign({}, styles.description)}>{description}</p>

//       <p style={styles.author}>
//         <strong>{author}</strong> &middot; {createdAt}
//       </p>
//       <div>
//         <p style={styles.read}>{readTime}</p>
//       </div>
//     </div>
//   );
// };

const Card = props => {
  const { id, title, path, description, logo } = props;
  return (
    <StaticQuery
      query={graphql`
        query {
          cobalt: file(relativePath: { eq: "cobalt-lounge.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          martini: file(relativePath: { eq: "tini-martini.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          staugdist: file(relativePath: { eq: "staug-dist.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const imgs = [
          data.staugdist.childImageSharp.fluid,
          data.martini.childImageSharp.fluid,
          data.cobalt.childImageSharp.fluid
        ];
        return (
          <Fade cascade>
            <div // CARD Title
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img // Wings
                src={Wing}
                style={styles.leftWing}
                height="10"
                alt="left-wing"
              />
              <Bounce cascade>
                <h3 style={Object.assign({}, styles.cardTitle)}>{title}</h3>
              </Bounce>
              <img
                src={Wing}
                style={styles.rightWing}
                height="10"
                alt="right-wing"
              />
            </div>

            <LightSpeed left>
              <div // Arrow
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
                marginTop: "-25px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 100,
                textTransform: "uppercase",
                letterSpacing: "2",
                fontSize: 12
              }}
            >
              <p>{description}</p>
            </div>
            
            
            <Img // Main Image
              fluid={imgs[id]} />
            
            <div style={Object.assign({}, styles.container, {})}>
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
                  

                  <img src={logo} alt="" width={"275"} />
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
                    <img src={Play} width={40} alt="play" />
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        );
      }}
    /> // End of StaticQuery
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
        <Slide top>
          <h1 style={styles.headerTitle}>
            <img src={icon} style={styles.icon} alt="" /> {headerTitle}
          </h1>
        </Slide>
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
