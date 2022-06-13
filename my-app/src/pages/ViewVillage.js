// == Imports
import React from "react";
import MinCard from "./MinCard";
import '../styles/viewVillage.scss'

const ViewVillage = () => {

    const items = []

    for (let i =0 ; i<9 ; i++) {
        items.push(< MinCard key={i} />)
      }

    return (
        <div className="viewVillage" >

          {items}

        </div>
    );
};

export default ViewVillage;