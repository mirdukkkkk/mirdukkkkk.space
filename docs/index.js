const welcome = [
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

document.getElementById('greeting').innerText = welcome[Math.floor(Math.random() * welcome.length)];