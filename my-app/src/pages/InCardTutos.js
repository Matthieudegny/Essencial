// == Imports
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/InCardTutos.scss";

function InCardTutos() {
  const tutosArray = useSelector((state) => state.allposts.allTutos);

  const [tutos, setTutos] = useState("");
  // console.log(tutosArray)

  let { tutosId } = useParams();
  let test = +tutosId;
  //console.log(typeof(test))

  useEffect(() => {
    const tutos = tutosArray.find((testedTutos) => {
      return testedTutos.id === test;
    });
    setTutos(tutos);
    //remplacer find par une requête tuto/id
  }, [tutosId]);



  return (
    <div className="in-card-tutos">
      {tutos && (
        <>
          <div className="img1">
            <img src={tutos.path} alt="tutos" />
          </div>

          {/* <h1>First Name = {user.first_name}</h1>
              <h1>Last Name = {user.last_name}</h1> */}
          <div className="infos">
            <h1>Title = {tutos.title}</h1>
            <h2>Content = {tutos.content} </h2>
            
          </div>
        </>
      )}
    </div>
  );
}

export default InCardTutos;
