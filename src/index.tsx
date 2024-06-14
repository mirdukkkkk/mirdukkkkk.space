import {Component, render} from 'preact';
import {Route, Switch} from 'wouter';

import {BackgroundContext, BackgroundManager} from "./managers/background";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Home from './pages/Home';
import Clicker from './pages/Clicker';
import NotFound from './pages/NotFound';

import './styles/index.css';
import styles from './styles/index.module.css';

class App extends Component {
    render() {
        return (
            <BackgroundContext.Provider value={BackgroundManager}>
                <BackgroundContext.Consumer>
                    {(manager) => {
                        manager.load();
                        return manager.isEnabled.value
                            ? <Background />
                            : null;
                    }}
                </BackgroundContext.Consumer>
                <div className={styles.block}>
                    <Header />
                    <div className={styles.indention} />
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/clicker">
                            <Clicker />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </BackgroundContext.Provider>
        )
    }
}

render(<App />, document.getElementById('app') as HTMLElement);