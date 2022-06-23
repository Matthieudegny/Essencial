export const SUBMIT_FRIEND = 'SUBMIT_FRIEND';
export const SAVE_FRIEND = 'SAVE_FRIEND';


export const actionSubmitFriend = () => ({
  type: SUBMIT_FRIEND,
});


//sauvergarde l'ajout de l'ami 
 export const actionSaveUser = (pseudo, token) => ({
  type: SAVE_FRIEND,
  payload: {
    pseudo, token,
  },
});

