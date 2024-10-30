import greetings from "../../../data/greetings";

const Greeting = () => (
    <strong>{greetings[Math.floor(Math.random() * greetings.length)]}</strong>
);

export default Greeting;
