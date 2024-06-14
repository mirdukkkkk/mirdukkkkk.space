import {type ComponentChildren} from "preact";
import {ColorContext} from "../../managers/color";
import styles from './RainbowSpan.module.css';

type RainbowSpanProps = {
    children: ComponentChildren;
}

const RainbowSpan = ({ children }: RainbowSpanProps) => (
    <ColorContext.Consumer>
        {(manager) =>
            <span
                className={styles.element}
                style={{ color: manager.color.value }}
                onClick={() => manager.changeColor()}
            >
                {children}
            </span>
        }
    </ColorContext.Consumer>
);

export default RainbowSpan;