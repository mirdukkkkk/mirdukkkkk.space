import {Component} from "preact";
import styles from './Links.module.css';

class Links extends Component {
    titles = [
        ['https://life.mirdukkkkk.space', 'My Pixel Battle'],
        ['https://source.mirdukkkkk.space', 'This website repo'],
        ['https://github.mirdukkkkk.space', 'GitHub'],
        ['https://discord.mirdukkkkk.space', 'Discord'],
        ['https://youtube.mirdukkkkk.space', 'YouTube']
    ];

    render() {
        return (
            <ul className={styles.links}>
                {this.titles.map(([url, name]) =>
                    <li><a href={url} target="_blank">{name}</a></li>
                )}
            </ul>
        )
    }
}

export default Links;