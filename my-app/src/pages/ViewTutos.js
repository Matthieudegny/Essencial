// == Imports
import React from "react";
import MinCard from "./MinCard";
import '../styles/viewTutos.scss'
import Caroussel from "../components/Caroussel";
const ViewTutos = () => {

  const items = []

  for (let i = 0; i < 9; i++) {
    items.push(< MinCard key={i} />)
  }

  return (
    <div className="viewTutos" >

  


      {items}

    </div>
  );
};

export default ViewTutos;