import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../assets"
import { easeOut, motion as m } from "framer-motion";

import "./home.css";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-420%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 40,
    }
  },
}

const imgVariants = {
  initial: {
    x: 30,
  },
  animate: {
    x: 0,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 5,
    }
  },
};

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >

      <div className="box">
        <p className="introText">HELLO there! want to know something about me? </p>
        <div className="button">
          <Link className="link" to={`./details`}>
             <p className="buttonText">Details</p>
          </Link>
          <ArrowIcon/>
        </div>
        
      </div>
      
    
      
      
    </m.div>
  );
};

export default Home;
