import { combineReducers } from "redux";
     
const rootReducer = combineReducers({
  registration: registrationReducer
});
 
export default rootReducer;
 
function registrationReducer(state = {loggedInStatus: "NOT_LOGGED_IN"}, action) {
  switch (action.type) {
    case "ADD_NEW_USER":
      console.log("reducer file new user");
      return {...state, user: action.user, loggedInStatus: "LOGGED_IN"};
    case "SIGN_IN":
      console.log(state);
      return {...state, user: action.user, loggedInStatus: "LOGGED_IN"};

    case "CURRENT_USER":
      return {...state, user: action.user, loggedInStatus: "LOGGED_IN"};
      
    case "RESET_USER":
      console.log("made it reset user");
      return {...state, user: action.user, loggedInStatus: "NOT_LOGGED_IN"};

    default:
      return state;
  }
}