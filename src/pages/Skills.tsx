import {Component, Fragment} from "preact";
import RainbowSpan from "../components/Functional/RainbowSpan/RainbowSpan";
import skills, {selectedSkills} from "../data/skills";
import styles from '../styles/pages/Skills.module.css';

class Skills extends Component {
    getSkills = () => {
        return skills.map((skill, index) =>
            <Fragment key={index}>
                {selectedSkills.includes(skill) ?
                    <RainbowSpan>{skill}</RainbowSpan> :
                    <span>{skill}</span>
                }
                {(index < skills.length - 1) && ', '}
            </Fragment>
        );
    }

    render() {
        return (
            <>
                <div className={styles.title}>My skills</div>
                <p className={styles.skills}>
                    {this.getSkills()}
                </p>
                <div className={styles.additional}>
                    <p>and I'm very bad at design</p>
                    <p>i try to learn new and <RainbowSpan>interesting</RainbowSpan> things</p>
                </div>
            </>
        );
    }
}

export default Skills;