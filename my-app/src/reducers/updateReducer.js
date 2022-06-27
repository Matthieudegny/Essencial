import { SAVE_DATA_USER, CHANGE_DATA_USER, SAVE_DATA_VILLAGE, CHANGE_DATA_VILLAGE, DELETE_USER  } from '../actions/updateProfile';

export const initialState = {
  dataProfile: [],
  user:'',
  ecoVillage:'',
  type : ""
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_USER:
        //console.log(action.payload)
      return {
        ...state,
       
        user : action.payload.dataUser,
        type: action.payload.type
       
      };

    case SAVE_DATA_VILLAGE:
      //console.log(action.payload)
    return {
      ...state,
      
      ecoVillage: action.payload.dataUser,
      type: action.payload.type
      
    };

    case CHANGE_DATA_USER:
    //console.log(action.payload)
    return {
    ...state,
      user:{
        ...state.user,
        [action.payload.nameInput]: action.payload.valueInput,
      }       
    
    };

    case CHANGE_DATA_VILLAGE:
    //console.log(action.payload)
    return {
    ...state,
      ecoVillage:{
        ...state.ecoVillage,
        [action.payload.nameInput]: action.payload.valueInput,
      }       
    
    };
    default:
      return state;
  }
};

export default reducer;

// {
//   address:'',
//   city:'',
//   date_of_birth:'',
//   description:'',
//   email:'',
//   first_name:'',
//   last_name:'',
//   path:'',
//   phone_number:'',
//   pseudo:'',
//   region:'',
//   zip_code:''
// }