import {Component, render} from 'preact';
import {Route, Switch} from 'wouter';

import Background from "./components/Background/Background";
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './styles/index.css';
import styles from './styles/index.module.css';

class App extends Component {
    render() {
        return (
            <>
                <Background />
                <div className={styles.block}>
                    <div/>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </>
        )
    }
}

render(<App />, document.getElementById('app') as HTMLElement);