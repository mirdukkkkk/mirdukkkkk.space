import {Component} from "preact";

class Greeting extends Component {
    greetings = [
        "hello",
        "hello there",
        "hi",
        "hey",
        "g'day",
        "howdy",
        "peek-a-boo",
        "hey there",
        "yo"
    ];

    greet() {
        return this.greetings[Math.floor(Math.random() * this.greetings.length)];
    }

    render() {
        return <strong>{this.greet()}</strong>;
    }
}

export default Greeting;