import React from "react";
import "./details.css";
import { NavLink } from "react-router-dom";
import Illustration_bewerbung from "../assets/Illustration_bewerbung.png";
import { Parragrafs, logos } from "../constants";
import { easeOut, motion as m } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    translateX: -50,
    translateY: -50,
  },
  animate: {
    opacity: 1,
    translateX: 0,
    translateY: 0,
  },
};

const imgVariants = {
  initial: {
    x: -900,
  },
  animate: {
    x: 0,
    rotate: 360,
  },
};

const Details = () => {
  return (
    <div className="details">
      <div className="columns">
        <div style={{ width: "50%" }}>
          <m.h2
            animate={{ y: 0 }}
            initial={{ y: -30 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
            }}
          >
            Hello there! 👋🏻 my name is Nathalia
          </m.h2>
          {Parragrafs.map((parragraf, i) => (
            <m.p
              className="parragraf"
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: i * 0.4, duration: 0.5 }}
            >
              {parragraf.para}
            </m.p>
          ))}
          {logos.map((icon, i) => (
            <m.img
              variants={imgVariants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 3,
                delay: 1.5,
                type: "spring",
                bounce: 0.4,
              }}
              src={icon.logo}
              alt={icon.name}
              key={i}
              width="40px"
              height="40px"
            />
          ))}
        </div>
        <div style={{ marginInline: "auto" }}>
          <m.img
            animate={{ x: 0 }}
            initial={{ x: 50 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            src={Illustration_bewerbung}
            alt="bewerbung photo of me"
          />
        </div>
      </div>
      <NavLink className="navlink" to={`/`}>
        Go back
      </NavLink>
    </div>
  );
};

export default Details;
