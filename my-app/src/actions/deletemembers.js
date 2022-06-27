export const DELETE_MEMBER = 'DELETE_MEMBER'

export const actionDeleteMember = (id,idUser) => {
  //console.log(id);
  return{
    type: DELETE_MEMBER,
    payload: {id, idUser}
  }
};