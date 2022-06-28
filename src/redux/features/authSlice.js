import { createSlice } from "@reduxjs/toolkit";
import authServices from "src/services/auth.services";
import { handleError } from "src/utils/ErrorHandler";
import { enqueueSnackbar } from "../actions/notification.action";

const initialState = {
  isLogin: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state) {
      state.isLogin = true;
    },
    logoutUser(state) {
      state.isLogin = false;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = {};
      state.isLogin = false;
    },
  },
});

export const { loginUser, logoutUser, setUser, clearUser } = authSlice.actions;

// User Login
export const performUserLogin = (path, data) => (dispatch) => {
  return authServices
    .requestLOGIN(path, data)
    .then((res) => {
      const { user, jwt, message } = res.data;
      dispatch(setUser(user));
      dispatch(loginUser());
      dispatch(
        enqueueSnackbar({
          message: "Login Successfully",
          options: {
            variant: "success",
          },
        })
      );
      authServices.setToken(jwt);
      return res.data;
    }).catch(error => {
      if(error.response){
        dispatch(enqueueSnackbar({
          message: error.response.data.message[0].messages[0].message,
          options: {
            variant: 'error' 
          }
        }))
        dispatch(clearUser())
      }
   

    })
};

// User Registration
export const  performUserRegistration = (path, data) => (dispatch) => {
  return authServices
      .requestRegister(path, data)
      .then((res) => {
        const { user, jwt, message } = res.data;

        console.log(res)
        dispatch(setUser(user));
        dispatch(loginUser());
        dispatch(
          enqueueSnackbar({
            message: "You have successfully registered",
            options: {
              variant: "success",
            },
          })
        );
        authServices.setToken(jwt);
        return res.data;
      }).catch(error => {
        if(error.response){
          handleError(error,dispatch)
          dispatch(clearUser())
        }
     
  
      })
}


// Oauth Login
export const OautLogin = (path) => (dispatch) => {
  return authServices
    .requestGET(path)
    .then((res) => {


      const { user, jwt, message } = res.data;
      dispatch(setUser(user));
      dispatch(loginUser());
      dispatch(
        enqueueSnackbar({
          message: "You have Login Successfully",
          options: {
            variant: "success",
          },
        })
      );


      authServices.setToken(jwt);


      return res.data;
    }).catch((error) => {
        handleError(error,dispatch)
        dispatch(clearUser())
    });
};


// Forgot Password
export const forgotPassword = (path, data) => (dispatch) => {
  return authServices
      .requestPOST(path, data)
      .then((res) => {
        const { user, token, message } = res.data;
        dispatch(setUser(user));
        dispatch(loginUser());
        dispatch(
          enqueueSnackbar({
            message: "Email sent successfully",
            options: {
              variant: "success",
            },
          })
        );
        authServices.setToken(token);
        return res.data;
        
      }).catch(error => {
        if(error.response){
          dispatch(
            enqueueSnackbar({
              message: "Something went wrong",
              options: {
                variant: "error",
              },
            })
          );
          dispatch(clearUser())
        }
     
  
      })
}


// User Logout
export const performUserLogout = (data) => (dispatch) => {
  
    return new Promise((resolve,reject) => {

      try {
        dispatch(clearUser())
        authServices.signout()
        
        resolve('ok')

        
      } catch (error) {
        reject(error)
      }


    })
}

export default authSlice.reducer;
