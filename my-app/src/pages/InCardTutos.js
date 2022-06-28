// == Imports
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/InCardTutos.scss";

function InCardTutos() {
  const tutosArray = useSelector((state) => state.allposts.allTutos);

  const [tutos, setTutos] = useState("");
   console.log(tutosArray)

  let { tutosId } = useParams();
  let test = +tutosId;
  //console.log(typeof(test))

  useEffect(() => {
    const tutos = tutosArray.find((testedTutos) => {
      return testedTutos.post_id === test;
    });
    setTutos(tutos);
    //remplacer find par une requête tuto/id
  }, [tutosId]);



  return (
    <div className="in-card-tutos">
      {tutos && (
        <>
          <div className="img1">
            <img src={tutos.photo_path} alt="tutos" />
          </div>

         
          <div className="infos">
            <h1>{tutos.post_title}</h1>
            <h2>{tutos.author_pseudo}</h2>
            <h2>{tutos.post_content} </h2>
            
          </div>
        </>
      )}
    </div>
  );
}

export default InCardTutos;
