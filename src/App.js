import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SetStateExample from './components/class/SetStateExample';
import UseStateExample from "./components/functional/UseStateExample";
import UseEffectExample from "./components/functional/UseEffectExample";

const classLinks = [
    { to: '/class/set-state', label: 'setState' },
]

const functionalLinks = [
    { to: '/functional/use-state', label: 'useState' },
    { to: '/functional/use-effect', label: 'useEffect' },
]

const classRoutes = [
    { path: '/class/set-state', component: SetStateExample },
]

const functionalRoutes = [
    { path: '/functional/use-state', component: UseStateExample },
    { path: '/functional/use-effect', component: UseEffectExample },
]

export default function App() {
    return (
        <main className="container p-4">
            <Router>
                <div className="row">
                    <nav className="col-4">
                        <strong>Class Components</strong>
                        <ul>
                            {
                                classLinks.map(el => (
                                    <li key={el.to}>
                                        <Link to={el.to}>{el.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <strong>Functional Components</strong>
                        <ul>
                            {
                                functionalLinks.map(el => (
                                    <li key={el.to}>
                                        <Link to={el.to}>{el.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className="col-8">
                        <Switch>
                            {classRoutes.map(route => (
                                <Route path={route.path}><route.component /></Route>
                            ))}
                            {functionalRoutes.map(route => (
                                <Route path={route.path}><route.component /></Route>
                            ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        </main>
    );
}
