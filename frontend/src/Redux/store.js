import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { albumReducer } from "./Album/reducer";
import { artistReducer } from "./Artist/reducer";
import { loginReducer } from "./Login/reducer";
import { newAlbumReducer } from "./NewAlbum/reducer";
import { singleAlbumReducer } from "./ShowAlbumDetails/reducer";


const reducer = combineReducers({
  albums: albumReducer,
  login:  loginReducer,
  newAlbum:newAlbumReducer,
  singleAlbum:singleAlbumReducer,
  artist:artistReducer
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
