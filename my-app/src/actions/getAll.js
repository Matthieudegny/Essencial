export const GET_ALL_USERS = 'GET_ALL_USERS';
export const SAVE_ALL_USERS = 'SAVE_ALL_USERS';
export const GET_ALL_VILLAGES = 'GET_ALL_VILLAGES';
export const SAVE_ALL_VILLAGES = 'SAVE_ALL_VILLAGES'


export const actionGetAllUsers = () => ({
  type: GET_ALL_USERS,
});

export const actionSaveAllUsers = (allUsersArray) => {
    //console.log("actionsaveUser interceptée")

    return  {
        type: SAVE_ALL_USERS,
        payload: allUsersArray
    }
}


export const actionGetAllVillages = () => {
  //console.log("action get all villages interceptée")
  return {
    type: GET_ALL_VILLAGES,
  }
}

export const actionSaveAllVillages = (allVillageArray) => {
 // console.log("actionsaveallvillage interceptée")

  return  {
      type: SAVE_ALL_VILLAGES,
      payload: allVillageArray
  }
}


