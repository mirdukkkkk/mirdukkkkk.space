import {Component} from "preact";
import {useLocation} from "wouter";
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
        const [location, _setLocation] = useLocation();
        if(location !== '/') this.titles[0][1] = this.titles[0][1].slice(3);

        return (
            <ul className={styles.list}>
                {this.titles.map(([url, name]) =>
                    <li><a href={url}>{name}</a></li>
                )}
            </ul>
        )
    }
}

export default Links;