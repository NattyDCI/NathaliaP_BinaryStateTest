import React from "react";
import { Link } from "react-router-dom";
import { easeOut, motion as m } from "framer-motion";
import ArrowIcon from "../assets/ArrowIcon";

import "./home.css";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="container"
    >
      <Link className="link" to={`./details`}>
        <m.h1 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          DETAILS
          <ArrowIcon />
        </m.h1>
      </Link>
    </m.div>
  );
};

export default Home;
