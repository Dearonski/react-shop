import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlice";
import { composeWithDevTools } from "@redux-devtools/extension";

export default configureStore(
    {
        reducer: {
            shops: shopReducer,
        },
    },
    composeWithDevTools()
);
