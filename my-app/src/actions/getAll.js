export const GET_ALL_USERS = 'GET_ALL_USERS';
export const SAVE_ALL_USERS = 'SAVE_ALL_USERS'


export const actionGetAllUsers = () => ({
  type: GET_ALL_USERS,
});

export const actionSaveAllUsers = (allUersArray) => ({
    type: SAVE_ALL_USERS,
    payload: {allUersArray}
})


