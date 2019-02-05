import React, { useReducer } from "react";
import { Link } from "gatsby";

const styles = {
  container: {
    height: 50,
    backgroundColor: "#222",
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    zIndex: 1,
    // border: '1px solid red',
    // paddingRight: '200px',
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    backgroundImage: 'linear-gradient(to right, #34CDFA, #E8D9F1)',
  },
  logo: {
    width: 45,
    // paddingRight: 10,
    paddingLeft: 10
  },
  brand: {
    color: "#eee",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "24px",
    fontWeight: "bolder",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textDecoration: "none",
    // width: "100%",
    paddingLeft: '10px'
    // border: '1px solid red'
  },
  links: {
    color: "#222",
    textDecoration: "none",
    fontFamily: "Open Sans, sans-serif",
    padding: '5px',
    fontSize: '16px',
    border: '1px solid #555',
    borderRadius: 3
  },
  linksContainer: {
    // border: "1px solid blue",
    display: 'flex',
  }
};

const initialState = { products: false, bars: false, company: false };
const Navbar = props => {
  const { logo, pad, brand } = props;

  function reducer(state, action) {
    switch (action) {
      case "products":
        return { company: false, bars: false, products: true };
      case "bars":
        return { company: false, bars: true, products: false };
      case "company":
        return { company: true, bars: false, products: false };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const links = [
    // {
    //   id: 2,
    //   path: "/products",
    //   title: "Products",
    //   active: state.products,
    //   onClick: () => dispatch("products")
    // },
    {
      id: 1,
      path: "/bars",
      title: "Bars",
      active: state.bars,
      onClick: () => dispatch("bars")
    },
    // {
    //   id: 0,
    //   path: "/company",
    //   title: "Company",
    //   active: state.company,
    //   onClick: () => dispatch("company")
    // },
    
    
  ];

  // console.log(width);
  return (
    <div
      style={Object.assign({}, styles.container, {
        paddingLeft: pad,
        paddingRight: pad
      })}
    > 
      <div >
        <Link to="/" style={styles.brand}>
          {brand === '' ? '' : `Locals`}
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={logo} style={styles.logo} alt="" />
        </Link>
      </div>
      <div style={{ width: 'inherit', display: 'flex' }}>
        <Link to="/" style={styles.brand}>
          {brand}
        </Link>
      </div>
      <div
        style={Object.assign({}, styles.linksContainer, { paddingRight: pad + pad + 10})}
      >
        {links.map(link => (
          <Link
            to={link.path}
            key={link.id}
            style={Object.assign({}, styles.links, {
              color: link.active === true ? "#fff" : "#222",
            })}
            onMouseEnter={e => {
              e.target.style.color = "#fff";
            }}
            onMouseLeave={e => (e.target.style.color = "#222")}
            onClick={link.onClick}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
