import { Component, Fragment } from "preact";
import Title from "../components/Template/Title/Title";
import RainbowSpan from "../components/Functional/RainbowSpan/RainbowSpan";
import skills, { additional, selectedSkills } from "../data/skills";
import styles from "../styles/pages/Skills.module.styl";

class Skills extends Component {
    render() {
        return (
            <>
                <Title>My skills</Title>
                <p className={styles.skills}>
                    {skills.map((skill, index) => (
                        <Fragment key={index}>
                            {selectedSkills.includes(skill) ? (
                                <RainbowSpan>{skill}</RainbowSpan>
                            ) : (
                                <span>{skill}</span>
                            )}
                            {index < skills.length - 1 && ", "}
                        </Fragment>
                    ))}
                </p>
                <div className={styles.additional}>{additional}</div>
            </>
        );
    }
}

export default Skills;
