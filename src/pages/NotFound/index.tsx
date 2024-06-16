import {Component} from "preact";
import {Link} from "wouter-preact";
import styles from './index.module.css';

import {ColorContext, type ColorManager} from "../../managers/color";

import RainbowSpan from "../../components/RainbowSpan/RainbowSpan";

class NotFound extends Component {
    declare context: typeof ColorManager;
    static contextType = ColorContext;

    componentWillMount() {
        this.context.color.value = '#ff3737';
    }

    render() {
        return (
            <>
                <div className={styles.title}>
                    <RainbowSpan>404</RainbowSpan>
                    <p>Not Found</p>
                </div>
                <div className={styles.comment}>
                    <p>page <RainbowSpan>doesn't</RainbowSpan> exist</p>
                    <p>you're <RainbowSpan>lost?</RainbowSpan></p>
                </div>

                <Link to="/" className={styles.return}>
                    click to return&nbsp;
                    <img
                        title="Return to home"
                        src="/images/back.svg"
                        width="20"
                        height="20"
                        alt="Return to home"
                    />
                </Link>
            </>
        )
    }
}

export default NotFound;