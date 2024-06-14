import styles from './Avatar.module.css';

type AvatarProps = {
    width: string | number;
    height: string | number;
}

const Avatar = ({ width, height }: AvatarProps) => (
    <img
        title="mirdukkkkk avatar"
        className={styles.avatar}
        alt="mirdukkkkk avatar"
        width={width}
        height={height}
        src="/avatar.webp"
    />
);

export default Avatar;