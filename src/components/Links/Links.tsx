import styles from './Links.module.css';
import links from "../../data/links";

const Links = () => (
    <ul className={styles.links}>
        {links.map(([url, name]) =>
            <li><a href={url} target="_blank">{name}</a></li>
        )}
    </ul>
);

export default Links;