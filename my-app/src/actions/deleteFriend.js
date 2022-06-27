export const DELETE_FRIEND = 'DELETE_FRIEND'

export const actionDeleteFriend = (id,idUser) => {
  //console.log(id);
  return{
    type: DELETE_FRIEND,
    payload: {id, idUser}
  }
};