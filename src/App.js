import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SetStateExample from './components/class/SetStateExample';
import Clock from './components/class/Clock';
import * as UseEffectExamples from './components/functional/UseEffectExamples';
import * as UseStateExamples from './components/functional/UseStateExamples';
import * as UseCustomHookExamples from './components/functional/UseCustomHookExamples';
import * as UseContextExamples from './components/functional/UseContextExamples';
import * as UseReducerExamples from './components/functional/UseReducerExamples';

const classLinks = [
    { to: '/class/set-state', label: 'setState' },
    { to: '/class/clock', label: 'Clock' },
]

const functionalLinks = [
    { to: '/functional/use-state', label: 'useState' },
    { to: '/functional/use-effect', label: 'useEffect' },
    { to: '/functional/use-custom-hook', label: 'useCustomHook' },
    { to: '/functional/use-context', label: 'useContext' },
    { to: '/functional/use-reducer', label: 'useReducer' },
]

const classRoutes = [
    { path: '/class/set-state', component: SetStateExample },
    { path: '/class/clock', component: Clock },
]

const functionalRoutes = [
    { path: '/functional/use-state', component: UseStateExamples.Basics },
    { path: '/functional/use-effect', component: UseEffectExamples.Basics },
    { path: '/functional/use-custom-hook', component: UseCustomHookExamples.FetchData },
    { path: '/functional/use-context', component: UseContextExamples.SimpleUseContext },
    { path: '/functional/use-reducer', component: UseReducerExamples.Simple },
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
                                <Route key={route.path} path={route.path}><route.component /></Route>
                            ))}
                            {functionalRoutes.map(route => (
                                <Route key={route.path} path={route.path}><route.component /></Route>
                            ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        </main >
    );
}
