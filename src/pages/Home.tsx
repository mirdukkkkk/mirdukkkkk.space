import {Component} from "preact";
import {BackgroundContext, BackgroundManager} from "../managers/background";
import Avatar from "../components/Avatar/Avatar";
import Links from "../components/Links/Links";
import RainbowSpan from "../components/Functional/RainbowSpan/RainbowSpan";
import Greeting from "../components/Utility/Greeting/Greeting";
import Country from "../components/Utility/Country/Country";
import styles from "../styles/pages/Home.module.css";

class Home extends Component {
    declare context: typeof BackgroundManager;
    static contextType = BackgroundContext;

    render() {
        return (
            <>
                <Avatar
                    width={200}
                    height={200}
                    onClick={this.context.nextStarColor}
                />

                <div className={styles.title}>
                    <Greeting />, i'm
                    <div className={styles.information} translate={false}>
                        &nbsp;<RainbowSpan>__NICKNAME__</RainbowSpan>&nbsp;
                        <Country
                            width={32}
                            height={32}
                            name="New Zealand"
                            code="nz"
                        />
                    </div>
                </div>
                <p>node.js, web</p>
                <p><RainbowSpan>junior</RainbowSpan> developer</p>
                <Links/>
            </>
        );
    }
}

export default Home;