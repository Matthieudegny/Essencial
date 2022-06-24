import { SAVE_DATA_USER, CHANGE_DATA_USER  } from '../actions/updateProfile';

export const initialState = {
  dataProfile: [],
  user:{
      address:'',
      city:'',
      date_of_birth:'',
      description:'',
      email:'',
      first_name:'',
      last_name:'',
      path:'',
      phone_number:'',
      pseudo:'',
      region:'',
      zip_code:''
  },
  ecoVillage:{

  },
  type : ""
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_USER:
        //console.log(action.payload)
      return {
        ...state,
       
        dataProfile: action.payload.dataUser,
        type: action.payload.type
       
      };

    case CHANGE_DATA_USER:
    //console.log(action.payload)
    return {
    ...state,
    
        dataProfile: action.payload.dataUser,
        type: action.payload.type
    
    };

    default:
      return state;
  }
};

export default reducer;