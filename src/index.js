import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import PlayerReducer from './reducers/player';
import Scoreboard from "./containers/Scoreboard";
import "./index.css";

const store = createStore(PlayerReducer);

render(
<Provider store={store}>
<Scoreboard />
</Provider>, 
document.getElementById("root"));
