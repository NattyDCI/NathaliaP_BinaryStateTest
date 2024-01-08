import React from 'react';
import "./details.css";
import { NavLink } from "react-router-dom";

const Details = () => {
  return (
    <div className='details'>Hier are the details
      <NavLink className="navlink" to={`/`}>Go back</NavLink>
    </div>
  )
}

export default Details;