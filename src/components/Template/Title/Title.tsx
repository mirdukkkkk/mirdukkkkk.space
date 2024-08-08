import {type ComponentChildren} from "preact";
import styles from "./Title.module.styl";

type TitleProps = {
    children: ComponentChildren;
}

const Title = ({ children }: TitleProps) => (
    <div className={styles.title}>{children}</div>
);

export default Title;