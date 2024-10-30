import { Component, type ComponentChildren, createRef } from "preact";
import { ColorContext, type ColorManager } from "../../../managers/color";
import styles from "./RainbowSpan.module.styl";

type RainbowSpanProps = {
    children: ComponentChildren;
};

class RainbowSpan extends Component {
    static contextType = ColorContext;
    declare context: typeof ColorManager;
    reference = createRef<HTMLSpanElement>();
    unsubscribe: (() => void) | null = null;

    changeColor = () => {
        if (!this.reference.current) return;
        this.reference.current.style.color = this.context.color.value;
    };

    componentDidMount() {
        this.unsubscribe = this.context.color.subscribe(this.changeColor);
    }

    componentWillUnmount() {
        if (!this.unsubscribe) return;
        this.unsubscribe();
    }

    render({ children }: RainbowSpanProps) {
        return (
            <span
                className={styles.rainbow}
                style={{ color: this.context.color.peek() }}
                onClick={this.context.nextColor}
                ref={this.reference}
            >
                {children}
            </span>
        );
    }
}

export default RainbowSpan;
