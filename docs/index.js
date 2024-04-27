const greetings = [
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
const colors = [
    "#1755ff",
    "#50c257",
    "#9f37c2",
    "#f1d04f",
    "#ff3737",
    "#7fffec"
];

function switchColor(random = false) {
    document.documentElement.style.setProperty(
        '--text-highlight-color',
        random
            ? colors[Math.floor(Math.random() * colors.length)]
            : colors[(colors.indexOf(document.documentElement.style.getPropertyValue('--text-highlight-color')) + 1) % colors.length]
    );
}

document.getElementById('greeting').innerText = greetings[Math.floor(Math.random() * greetings.length)];
switchColor(true);