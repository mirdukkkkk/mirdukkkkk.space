import {Component, type ComponentChildren} from "preact";
import {ColorContext} from "../../managers/color";
import styles from './RainbowSpan.module.css';

type Props = {
    children: ComponentChildren;
}

class RainbowSpan extends Component<Props> {
    render(props: Props) {
        return (
            <ColorContext.Consumer>
                {(manager) =>
                    <span
                        className={styles.element}
                        style={{ color: manager.color.value }}
                        onClick={() => manager.changeColor()}
                    >
                        {props.children}
                    </span>
                }
            </ColorContext.Consumer>
        )
    }
}

export default RainbowSpan;