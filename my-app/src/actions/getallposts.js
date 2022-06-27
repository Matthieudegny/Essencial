//Imports posts
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const SAVE_ALL_POSTS = 'SAVE_ALL_POSTS';
//Imports tutos
export const GET_ALL_TUTOS = 'GET_ALL_TUTOS';
export const SAVE_ALL_TUTOS = 'SAVE_ALL_TUTOS';

// Action posts

export const actionGetAllPosts = () => ({
    type: GET_ALL_POSTS,
  });

  export const actionSaveAllPosts = (allPostsArray) => {
      //console.log("actionsaveallPosts interceptée")
  
      return  {
          type: SAVE_ALL_POSTS,
          payload: allPostsArray
      }
  }

// Action tutos

export const actionGetAllTutos = () => ({
    type: GET_ALL_TUTOS,
  });
  
  export const actionSaveAllTutos = (allTutosArray) => {
      //console.log("actionsaveallTutos interceptée")
  
      return  {
          type: SAVE_ALL_TUTOS,
          payload: allTutosArray
      }
  }
  