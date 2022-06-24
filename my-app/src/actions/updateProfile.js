export const SAVE_DATA_USER = 'SAVE_DATA_USER';
export const CHANGE_DATA_USER = 'CHANGE_DATA_USER';

export const actionSaveInfoUpdateProfile = (dataUser, type) => ({
  type: SAVE_DATA_USER,
  payload: {
    dataUser,
    type
  },
});

export const actionChangeUpdateProfileUser = (nameInput, valueInput) => ({
    type: CHANGE_DATA_USER,
    payload: {
      nameInput,
      valueInput
    },
});