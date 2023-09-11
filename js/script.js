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
    quote: "Don’t let anyone ever make you feel like you don’t deserve what you want.",
    source: 'Heath Ledger as Patrick Verona',
    citation: '10 Things I Hate About You',
    year: 1999,
    tags: 'film'
  },
  {
    quote: "No matter what anybody tells you, words and ideas can change the world.",
    source: 'Robin Williams as John Keating',
    citation: 'Dead Poets Society',
    year: 1989,
    tags: 'film'
  },
  {
    quote: "Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.",
    source: 'Matthew Broderick as Ferris Bueller',
    citation: 'Ferris Bueller’s Day Off',
    year: 1986,
    tags: 'film'
  },
  {
    quote: "It is better to be hated for what you are than to be loved for what you are not.",
    source: 'André Gide',
    citation: 'Autumn Leaves',
    year: 1950,
    tags: 'literature'
  },
  {
    quote: "And, now that you don’t have to be perfect you can be good.",
    source: 'John Steinbeck',
    citation: 'East of Eden',
    year: 1952,
    tags: 'literature'
  },
  {
    quote: "She decided long ago that life was a long journey. She would be strong, and she would be weak, and both would be okay.",
    source: 'Tahereh Mafi',
    citation: 'Furthermore',
    year: 2016,
    tags: 'literature'
  },
  {
    quote: "I know very little about anything, but what I do know is that if you can live your life without an audience, you should do it.",
    source: 'Bo Burnham',
    citation: 'Make Happy',
    year: 2016,
    tags: 'film'
  }
]


/***
 * `getRandomColor` function
 * 
 * When a new quote prints to the page, the background color changes to a random color.

Create a function that updates the background color to a random color.
***/

function getRandomColor() {
  const red = Math.floor((Math.random() * 255))
  const green = Math.floor((Math.random() * 255))
  const blue = Math.floor((Math.random() * 255))

  return `rgb(${red} ${green} ${blue})`
}


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

  // update the background color using getRandomColor function

  document.body.style.backgroundColor = getRandomColor()

}

// Auto-refreshed quotes
// The quote on the page automatically updates at regular intervals.

// Create a timing function with the setInterval() method to print a new quote to the page at regular intervals, like every 10 to 20 seconds.

setInterval(printQuote, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false)