import {Component, type ComponentChild} from 'preact';
import styles from './Avatar.module.css';

type Props = {
    width: number;
    height: number;
} & ComponentChild;

class Avatar extends Component<Props> {
    render(props: Props) {
        return (
            <img
                title="mirdukkkkk avatar"
                className={styles.avatar}
                alt="mirdukkkkk avatar"
                width={props.width}
                height={props.height}
                src="https://avatars.githubusercontent.com/u/69540930?v=4"
            />
        );
    }
}

export default Avatar;