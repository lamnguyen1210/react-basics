import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UseStateExample from "./components/functional/UseStateExample";

export default function App() {
    return (
        <main className="container p-4">
            <Router>
                <div className="row">
                    <nav className="col-2">
                        <ul>
                            <li>
                                <Link to="/functional/use-state">useState</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="col-10">
                        <Switch>
                            <Route path="/functional/use-state"><UseStateExample /></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </main>
    );
}
