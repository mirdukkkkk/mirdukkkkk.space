import {Component, type ComponentChild} from "preact";
import {signal, type Signal} from "@preact/signals";
import LocalStorage from "../../classes/LocalStorage";
import config from "../../config";
import styles from './index.module.css';

type ClickerState = {
    clicks: Signal<number>;
}

class Clicker extends Component<ComponentChild, ClickerState> {
    version = { version: config.clicker.version };

    constructor() {
        super();

        if(!LocalStorage.get('clicker')) LocalStorage.set('clicker', { ...this.version, clicks: 0 });
        this.state = {
            clicks: signal(LocalStorage.get('clicker')!.clicks)
        }
    }

    render() {
        return (
            <>
                <div
                    className={styles.title}
                    translate={false}
                >
                    {this.state.clicks}
                </div>

                <div
                    title="Click me!"
                    className={styles.parrot}
                    onClick={() =>
                        LocalStorage.set('clicker', {
                            ...this.version,
                            clicks: (this.state.clicks.value++) + 1
                        })
                    }
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