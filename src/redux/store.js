import { configureStore } from "@reduxjs/toolkit";
import AddResourceSlice from "./AddResourceSlice";


const store = configureStore({
reducer:{
     formData : AddResourceSlice
},
})

export default store