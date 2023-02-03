const quotes = [
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to be stop questioning.",
        author: "Albert Einstein"
    },
    {
        quote: "As I get older, I realize being wrong isn't a bad thing like they teach you in school. It is an opportunity to learn something.",
        author: "Richard Feynmann"
    },
    {
        quote: "I learned very early the difference between knowing the name of something and knowing something",
        author: "Richard Feynmann"
    },
    {
        quote: "What you think you become, what you feel you attract, what you imagine you create",
        author: "Buddha"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;