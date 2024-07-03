import {Component} from 'preact';

import {renderExceptions} from "./data/routes";
import {BackgroundContext, BackgroundManager} from "./managers/background";
import {ColorContext, ColorManager} from "./managers/color";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Router from "./router";

import './styles/font.css';
import './styles/index.css';
import styles from './styles/index.module.css';

class App extends Component {
    isException = renderExceptions.includes(window.location.pathname);

    backgroundSwitcher = () => {
        return (
            BackgroundManager.isEnabled.value &&
            !this.isException
        ) && <Background />;
    }

    componentWillMount() {
        BackgroundManager.load();
    }

    render() {
        return (
            <BackgroundContext.Provider value={BackgroundManager}>
                <BackgroundContext.Consumer>
                    {this.backgroundSwitcher}
                </BackgroundContext.Consumer>
                <div className={styles.block}>
                    {!this.isException &&
                        <>
                            <Header />
                            <div className={styles.indention} />
                        </>
                    }
                    <ColorContext.Provider value={ColorManager}>
                        <Router />
                    </ColorContext.Provider>
                </div>
            </BackgroundContext.Provider>
        );
    }
}

export default App;