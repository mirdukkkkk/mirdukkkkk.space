import {Component} from "preact";
import styles from "./index.module.css";

import Avatar from "../../components/Avatar/Avatar";
import Links from "../../components/Links/Links";
import RainbowSpan from "../../components/Functional/RainbowSpan/RainbowSpan";
import Greeting from "../../components/Utility/Greeting/Greeting";
import Country from "../../components/Utility/Country/Country";

class Home extends Component {
    render() {
        return (
            <>
                <Avatar width={200} height={200} />
                <div className={styles.title}>
                    <Greeting/>, i'm
                    <div className={styles.information} translate={false}>
                        &nbsp;<RainbowSpan>mirdukkkkk</RainbowSpan>&nbsp;
                        <Country
                            width={32}
                            height={32}
                            name="New Zealand"
                            code="nz"
                        />
                    </div>
                </div>
                <p className={styles.additional}>node.js, web</p>
                <p className={styles.additional}><RainbowSpan>junior</RainbowSpan> developer</p>
                <Links/>
            </>
        )
    }
}

export default Home;