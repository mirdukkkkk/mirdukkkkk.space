import { Component } from "preact";
import { Link } from "wouter-preact";
import { ColorContext, type ColorManager } from "../managers/color";
import { span } from "../data/colors";
import RainbowSpan from "../components/Functional/RainbowSpan/RainbowSpan";
import Title from "../components/Template/Title/Title";
import styles from "../styles/pages/NotFound.module.styl";

class NotFound extends Component {
    static contextType = ColorContext;
    declare context: typeof ColorManager;

    componentWillMount() {
        this.context.color.value = span.danger;
    }

    render() {
        return (
            <>
                <Title>
                    <RainbowSpan>404</RainbowSpan>
                    <p className={styles.additional}>Not Found</p>
                </Title>
                <div className={styles.comment}>
                    <p>
                        page <RainbowSpan>doesn't</RainbowSpan> exist
                    </p>
                    <p>
                        you're <RainbowSpan>lost?</RainbowSpan>
                    </p>
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
        );
    }
}

export default NotFound;
