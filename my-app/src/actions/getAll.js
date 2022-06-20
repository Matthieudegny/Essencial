export const GET_ALL_USERS = 'GET_ALL_USERS';
export const SAVE_ALL_USERS = 'SAVE_ALL_USERS'


export const actionGetAllUsers = () => ({
  type: GET_ALL_USERS,
});

export const actionSaveAllUsers = (allUsersArray) => {
    console.log("alors?")

    return  {
        type: SAVE_ALL_USERS,
        payload: allUsersArray
    }
}


