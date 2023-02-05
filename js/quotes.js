const quotes = [
    {
        quote: "Physical fitness can neither be achieved by wishful thinking nor outright purchase.",
        author: "Joseph Pilates"
    },
    {
        quote: "When you hit failure, your workout has just begun.",
        author: "Ronnie Coleman"
    },
    {
        quote: "There are two types of pains, one that hurts you and the other that changes you.",
        author: "Jetti Woodruff"
    },
    {
        quote: "To keep the body in good health is a duty… otherwise, we shall not be able to keep our mind strong and clear.",
        author: "Buddha"
    },
    {
        quote: "Some are born strong, and others are made strong.",
        author: "J.R. Rim"
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin"
    },
    {
        quote: "If you think lifting weights is dangerous, try being weak. Being weak is dangerous.",
        author: "Bret Contreras"
    },
    {
        quote: "The first and greatest victory is to conquer self.",
        author: "Plato"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;