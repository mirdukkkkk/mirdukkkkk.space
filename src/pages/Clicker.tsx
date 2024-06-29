import {Component, createRef} from "preact";
import {signal, type Signal} from "@preact/signals";
import LocalStorage from "../classes/LocalStorage";
import config from "../config";
import styles from '../styles/pages/Clicker.module.css';

type ClickerState = {
    clicks: Signal<number>;
}

class Clicker extends Component<{}, ClickerState> {
    version = { version: config.clicker.version };
    counterRef = createRef<HTMLDivElement>();

    constructor() {
        super();

        if(!LocalStorage.get('clicker')) LocalStorage.set('clicker', { ...this.version, clicks: 0 });
        this.state = {
            clicks: signal(LocalStorage.get('clicker')!.clicks)
        }
    }

    handleClick =() => {
        const clicks = this.state.clicks.value + 1;
        this.state.clicks.value = clicks;
        LocalStorage.set('clicker', { ...this.version, clicks });

        const counter = this.counterRef.current;
        if(counter) {
            counter.classList.remove(styles.animate);
            void counter.offsetWidth;
            counter.classList.add(styles.animate);
        }
    }

    render() {
        return (
            <>
                <div
                    className={styles.title}
                    translate={false}
                    ref={this.counterRef}
                >
                    {this.state.clicks}
                </div>

                <div
                    title="Click me!"
                    className={styles.parrot}
                    onClick={this.handleClick}
                >
                    <img
                        src="/images/parrot.svg"
                        alt="Parrot Emoji"
                    />
                </div>
            </>
        );
    }
}

export default Clicker;