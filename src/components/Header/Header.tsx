import {Component} from "preact";
import {Link} from "wouter-preact";
import {BackgroundContext, type BackgroundManager} from "../../managers/background";
import Checkbox from "../Checkbox/Checkbox";
import styles from './Header.module.css';

class Header extends Component {
    declare context: typeof BackgroundManager;
    static contextType = BackgroundContext;

    stylize(isActive: boolean) {
        return isActive
            ? styles.active
            : '';
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link
                        to="/"
                        className={this.stylize}
                    >
                        Home
                    </Link>

                    <Link
                        to="/clicker"
                        className={this.stylize}
                    >
                        Clicker
                    </Link>
                </div>
                <div className={styles.right}>
                    <Checkbox
                        name="enable_background"
                        onChange={(value) => {
                            this.context.toggle(value);
                            this.context.save();
                        }}
                        checked={this.context.isEnabled}
                    >
                        Background
                    </Checkbox>
                </div>
            </header>
        )
    }
}

export default Header;