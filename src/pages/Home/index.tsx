import {Component} from "preact";
import styles from "./index.module.css";
import config from "../../config";

import Avatar from "../../components/Avatar/Avatar";
import Links from "../../components/Links/Links";
import RainbowSpan from "../../components/RainbowSpan/RainbowSpan";
import {ColorContext, ColorManager} from "../../managers/color";

class Home extends Component {
    greet() {
        return config.greetings[Math.floor(Math.random() * config.greetings.length)];
    }

    render() {
        return (
            <>
                <Avatar width={200} height={200} />
                <ColorContext.Provider value={ColorManager}>
                    <div className={styles.header}>
                        <strong>{this.greet()}</strong>, i'm
                        <div className={styles.information} translate={false}>
                            <RainbowSpan>&nbsp;mirdukkkkk&nbsp;</RainbowSpan>
                            <img
                                className={styles.country}
                                title="New Zealand"
                                width="32"
                                height="32"
                                src="/images/flag_nz.svg"
                                alt="New Zealand Flag"
                            />
                        </div>
                    </div>
                    <p className={styles.additional}>node.js, web</p>
                    <p className={styles.additional}><RainbowSpan>junior</RainbowSpan> developer</p>
                </ColorContext.Provider>
                <Links/>
            </>
        )
    }
}

export default Home;