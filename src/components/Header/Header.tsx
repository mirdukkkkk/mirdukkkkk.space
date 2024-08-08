import {Component} from "preact";
import {Link} from "wouter-preact";
import {BackgroundContext, type BackgroundManager} from "../../managers/background";
import Checkbox from "../Functional/Checkbox/Checkbox";
import navbar from "../../data/navbar";
import styles from './Header.module.styl';

const NavLink = process.env.NODE_ENV === 'development'
    ? Object.assign(Link, { displayName: 'NavLink' })
    : Link;

class Header extends Component {
    declare context: typeof BackgroundManager;
    static contextType = BackgroundContext;

    stylize = (isActive: boolean) => {
        return isActive
            ? styles.active
            : '';
    }

    backgroundCheckbox = (value: boolean) => {
        this.context.toggle(value);
        this.context.save();
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.left}>
                    {navbar.map(({ name, path }) =>
                        <NavLink to={path} className={this.stylize}>{name}</NavLink>
                    )}
                </div>
                <div className={styles.right}>
                    <Checkbox
                        name="enable_background"
                        onChange={this.backgroundCheckbox}
                        checked={this.context.isEnabled}
                    >
                        Background
                    </Checkbox>
                </div>
            </header>
        );
    }
}

export default Header;