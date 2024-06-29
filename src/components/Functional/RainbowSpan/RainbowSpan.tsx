import {Component, type ComponentChildren} from "preact";
import {ColorContext, type ColorManager} from "../../../managers/color";
import styles from './RainbowSpan.module.css';

type RainbowSpanProps = {
    children: ComponentChildren;
}

class RainbowSpan extends Component {
    declare context: typeof ColorManager;
    static contextType = ColorContext;

    render({ children }: RainbowSpanProps) {
        return (
            <span
                className={styles.rainbow}
                style={{ color: this.context.color.value }}
                onClick={this.context.nextColor}
            >
                {children}
            </span>
        );
    }
}

export default RainbowSpan;