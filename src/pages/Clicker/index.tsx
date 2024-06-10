import {Component, type ComponentChild} from "preact";
import LocalStorage from "../../classes/LocalStorage";
import config from "../../config";
import styles from './index.module.css';

type State = {
    clicks: number;
}

class Clicker extends Component<ComponentChild, State> {
    version = { version: config.clicker.version };

    constructor() {
        super();

        if(!LocalStorage.get('clicker')) LocalStorage.set('clicker', { ...this.version, clicks: 0 });
        this.state = {
            clicks: LocalStorage.get('clicker')!.clicks
        }
    }

    render() {
        return (
            <>
                <div
                    className={styles.essence}
                    translate={false}
                >
                    {this.state.clicks}
                </div>

                <div
                    title="Click me!"
                    className={styles.parrot}
                    onClick={() => {
                        LocalStorage.set('clicker', {
                            ...this.version,
                            clicks: this.state.clicks + 1
                        });
                        this.setState({ clicks: this.state.clicks + 1 });
                    }}
                >
                    <img
                        src="/images/parrot.svg"
                        alt="Parrot Emoji"
                    />
                </div>
            </>
        )
    }
}

export default Clicker;