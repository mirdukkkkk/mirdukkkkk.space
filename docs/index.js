document.addEventListener('DOMContentLoaded', function() {
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

    document.documentElement.style.setProperty('--text-highlight-color', colors[Math.floor(Math.random() * colors.length)])
    document.getElementById('greeting').innerText = greetings[Math.floor(Math.random() * greetings.length)];
})