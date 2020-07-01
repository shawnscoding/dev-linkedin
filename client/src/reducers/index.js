import { combineReducers } from "redux";
import alert from "./alert.js";
import auth from "./auth.js";
import profile from "./profile";
import post from "./post";

export default combineReducers({
  alert,
  auth,
  post,
  profile,
});
