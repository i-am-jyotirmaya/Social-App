import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./screens/home/home";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
