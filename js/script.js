/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: '1',
    source: 'a',
    citation: 'book',
    year: 1999,
    tags: 'humor'
  },
  {
    quote: '2',
    source: 'b',
    tags: 'humor'
  },
  {
    quote: '3',
    source: 'c',
    tags: 'poetry'
  },
  {
    quote: '4',
    source: 'd',
    tags: 'science'
  },
  {
    quote: '5',
    source: 'e',
    tags: 'film'
  }
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote( quotes ) {
  const randomNum = Math.floor(Math.random() * (quotes.length))
  return quotes[randomNum]
}
// console.log( getRandomQuote ( quotes ) )



/***
 * `printQuote` function
***/

function printQuote() {
  const randomQuote = getRandomQuote( quotes )
  console.log(randomQuote)
  let html = ''
  html += `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `
  if( randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  } 
  if ( randomQuote.year ) {
    html += `<span class="year">${randomQuote.year}</span>`
  }
  if ( randomQuote.tags ) {
    html += `<span class="tags">, ${randomQuote.tags}</span>`
  }

  html += `</p>`

  // console.log(html)

  document.getElementById('quote-box').innerHTML = html; 

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);