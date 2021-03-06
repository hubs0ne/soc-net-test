import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import { createStore, combineReducers } from 'redux';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;