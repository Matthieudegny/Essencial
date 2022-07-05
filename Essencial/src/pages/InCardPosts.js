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
        <div className="in-card-posts-main">

          <div className="in-card-posts-main-container">
            <img src={posts.photo_path} alt="posts" className="in-card-posts-main-container-image" />
          </div>

          
          <div className="in-card-posts-main-infos">
            <h1 className="in-card-posts-main-infos-h1">{posts.post_title}</h1>
            <h2 className="in-card-posts-main-infos-h2">{posts.author_pseudo}</h2>
            <h2 className="in-card-posts-main-infos-h2">{posts.post_content} </h2>
          </div>

        </div>
        </>
      )}
    </div>
  );
}

export default InCardPosts;
