export const SUBMIT_FRIEND = 'SUBMIT_FRIEND';
export const SAVE_FRIEND = 'SAVE_FRIEND';


export const actionSubmitFriend = (id,idUser) => {
  //console.log(id);
  return{
    type: SUBMIT_FRIEND,
    payload: {id, idUser}
  }
};

//sauvergarde l'ajout de l'ami 
 export const actionSaveFriend = (data) => ({
  type: SAVE_FRIEND,
  payload: {
    data,
  }
});

