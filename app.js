
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const apiURL = "https://api.quotable.io/random";

async function getQuote(){
    const response = await fetch(apiURL);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote();