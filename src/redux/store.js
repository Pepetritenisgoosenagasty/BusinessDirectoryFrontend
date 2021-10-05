import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { combineReducers } from "redux";
import notifications from "./reducers/notification.reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


let rootReducer = combineReducers({
  auth: authReducer,
  notify: notifications
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],

  }


  const persistedReducer = persistReducer(persistConfig, rootReducer);


 const store = configureStore({
    reducer: persistedReducer,
  })


export default store
