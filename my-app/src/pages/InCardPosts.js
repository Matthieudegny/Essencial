// == Imports
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/InCardPosts.scss";

function InCardPosts() {
  const postsArray = useSelector((state) => state.allposts.allPosts);

  const [posts, setPosts] = useState("");
  // console.log(tutosArray)

  let { postsId } = useParams();
  let test = +postsId;
  //console.log(typeof(test))

  useEffect(() => {
    const posts = postsArray.find((testedPosts) => {
      return testedPosts.post_id === test;
    });
    setPosts(posts);
    //remplacer find par une requête tuto/id
  }, [postsId]);

  return (
    <div className="in-card-posts">
      {posts && (
        <>
          <div className="img1">
            <img src={posts.photo_path} alt="posts" />
          </div>

          
          <div className="infos">
            <h1>{posts.post_title}</h1>
            <h2>{posts.author_pseudo}</h2>
            <h2>{posts.post_content} </h2>
            
          </div>
        </>
      )}
    </div>
  );
}

export default InCardPosts;
