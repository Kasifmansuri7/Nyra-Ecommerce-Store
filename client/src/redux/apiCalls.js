import { loginFailure,  loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import {
  registerFailure,
  registerSuccess,
  registerStart,
} from "./registerUserRedux";


export const login = async (dispatch, user) => {

  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    alert("Registration Successful!");
  } catch (err) {
    dispatch(registerFailure());
  }
};
