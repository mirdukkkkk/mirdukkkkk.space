import {Component} from "preact";
import {Link} from "wouter";
import styles from './index.module.css';

import RainbowSpan from "../../components/RainbowSpan/RainbowSpan";
import {ColorContext, generateColorManager} from "../../managers/color";

class NotFound extends Component {
    render() {
        return (
            <>
                <ColorContext.Provider value={generateColorManager('#ff3737')}>
                    <div className={styles.essence}>
                        <RainbowSpan>404</RainbowSpan>
                        <p>Not Found</p>
                    </div>
                    <div className={styles.comment}>
                        <p>page <RainbowSpan>doesn't</RainbowSpan> exist</p>
                        <p>you're <RainbowSpan>lost?</RainbowSpan></p>
                    </div>

                    <Link href="/" className={styles.return}>
                        click to return&nbsp;
                        <img
                            title="Return to home"
                            src="/images/back.svg"
                            width="20"
                            height="20"
                            alt="Return to home"
                        />
                    </Link>
                </ColorContext.Provider>
            </>
        )
    }
}

export default NotFound;