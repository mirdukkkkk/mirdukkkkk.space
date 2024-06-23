import {Component, render} from 'preact';

import {BackgroundContext, BackgroundManager} from "./managers/background";
import {ColorContext, ColorManager} from "./managers/color";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Router from "./router";

import './styles/font.css';
import './styles/index.css';
import styles from './styles/index.module.css';

class App extends Component {
    componentWillMount() {
        BackgroundManager.load();
    }

    render() {
        return (
            <BackgroundContext.Provider value={BackgroundManager}>
                <BackgroundContext.Consumer>
                    {() => BackgroundManager.isEnabled.value && <Background />}
                </BackgroundContext.Consumer>
                <div className={styles.block}>
                    <Header />
                    <div className={styles.indention} />
                    <ColorContext.Provider value={ColorManager}>
                        <Router />
                    </ColorContext.Provider>
                </div>
            </BackgroundContext.Provider>
        )
    }
}

render(<App />, document.getElementById('app') as HTMLElement);