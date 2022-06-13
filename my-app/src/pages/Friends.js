// == Imports
import React from "react";
import MinCard from "./MinCard";
import '../styles/friends.scss'

const Friends = () => {

    const items = []

    for (let i =0 ; i<9 ; i++) {
        items.push(< MinCard key={i} />)
      }

    return (
        <div className="friends" >
            <h1>Mes amis</h1>
          {items}

        </div>
    );
};

export default Friends;