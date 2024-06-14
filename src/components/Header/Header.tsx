import {Component} from "preact";
import {Link} from "wouter";
import {BackgroundContext, type BackgroundManager} from "../../managers/background";
import Checkbox from "../Checkbox/Checkbox";
import styles from './Header.module.css';

class Header extends Component {
    declare context: typeof BackgroundManager;
    static contextType = BackgroundContext;

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link
                        to="/"
                        className={(isActive) => isActive ? styles.active : ''}
                    >
                        Home
                    </Link>

                    <Link
                        to="/clicker"
                        className={(isActive) => isActive ? styles.active : ''}
                    >
                        Clicker
                    </Link>
                </div>
                <div>
                    <BackgroundContext.Consumer>
                        {(manager) =>
                            <Checkbox
                                name="enable_background"
                                onChange={(value) => {
                                    manager.toggle(value);
                                    manager.save();
                                }}
                                checked={manager.isEnabled}
                            >
                                Background
                            </Checkbox>
                        }
                    </BackgroundContext.Consumer>
                </div>
            </header>
        )
    }
}

export default Header;