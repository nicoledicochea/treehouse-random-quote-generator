/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
  * declare `quotes` array
  * @constant
  * @type
    * {Object}: quotes
    * {string}: quote
    * {string}: source
    * {string}: citation
    * {number}: year
    * {string}: tags
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
 * return rgb() color value
***/

function getRandomColor() {
  const red = Math.floor((Math.random() * 255))
  const green = Math.floor((Math.random() * 255))
  const blue = Math.floor((Math.random() * 255))

  return `rgb(${red} ${green} ${blue})`
}


/***
 * `getRandomQuote` function
 * return a random quote object from the quotes array
 * @param {Object[].<string, number>} quotes - array of quote objects
 * @returns {Object.<string, number>} - one random quote
***/

function getRandomQuote( quotes ) {
  const randomNum = Math.floor(Math.random() * (quotes.length))
  return quotes[randomNum]
}

/***
 * `printQuote` function
 * print a random quote to the page
***/

function printQuote() {


  // generate random quote
  const randomQuote = getRandomQuote( quotes )

  // initialize html as an empty string
  let html = ''

  // add quote and source properties to html using template literal
  html += `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `
  // conditionally add citation property 
  if( randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  } 

  // conditionally add year property
  if ( randomQuote.year ) {
    html += `<span class="year">${randomQuote.year}</span>`
  }

  // conditionally add tags property
  if ( randomQuote.tags ) {
    html += `<span class="tags">, ${randomQuote.tags}</span>`
  }

  html += `</p>`

  // set quote-box innerHTML to generated `html` string
  document.getElementById('quote-box').innerHTML = html; 

  // update the background color using `getRandomColor` function
  document.body.style.backgroundColor = getRandomColor()

}

/***
 *run printQuote function every 10 seconds
 * @callback printQuote
***/
setInterval(printQuote, 10000)

/***
 * click event listener to run printQuote function
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false)