import styles from "./Avatar.module.styl";

type AvatarProps = {
    width: string | number;
    height: string | number;
    onClick?: () => any;
};

const Avatar = ({ width, height, onClick }: AvatarProps) => (
    <img
        title="mirdukkkkk avatar"
        className={styles.avatar}
        alt="mirdukkkkk avatar"
        width={width}
        height={height}
        src="/avatar.webp"
        onClick={onClick}
    />
);

export default Avatar;
