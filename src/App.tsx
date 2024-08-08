import {Component} from 'preact';

import {renderExceptions} from "./data/routes";
import {BackgroundContext, BackgroundManager} from "./managers/background";
import {ColorContext, ColorManager} from "./managers/color";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Router from "./router";

import './styles/font.styl';
import './styles/index.styl';

import './helloConsole';

class App extends Component {
    isException = renderExceptions.includes(window.location.pathname);

    backgroundSwitcher = () => {
        return (
            BackgroundManager.isEnabled.value &&
            !this.isException
        ) && <Background
            starColor={BackgroundManager.starColor.value}
            starSpeed={BackgroundManager.starSpeed.value}
        />;
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
                <div style={{
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    {!this.isException &&
                        <>
                            <Header />
                            <div style={{ marginTop: '10vh' }} />
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