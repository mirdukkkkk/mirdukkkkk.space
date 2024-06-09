import {Component} from "preact";
import {useReducer} from "preact/hooks";
import LocalStorage from "../../classes/LocalStorage";
import config from "../../config";
import styles from './index.module.css';


class Clicker extends Component {
    version = { version: config.clicker.version };

    reducer(state: number, action: string) {
        switch(action) {
            case 'inc':
                return state += 1;
            default:
                throw new Error('Unexpected action')
        }
    }

    render() {
        if(!LocalStorage.get('clicker')) LocalStorage.set('clicker', { ...this.version, clicks: 0 });
        const [clicks, dispatch] = useReducer(this.reducer, LocalStorage.get('clicker')!.clicks);

        return (
            <>
                <div className={styles.essence}>{clicks}</div>
                <div
                    title="Click me!"
                    className={styles.parrot}
                    onClick={() => {
                        LocalStorage.set('clicker', {
                            ...this.version,
                            clicks: clicks + 1
                        });
                        dispatch('inc');
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