// Get a reference to the paragraph element that will display the quote
const paragraph = document.querySelector('#quote-text');

// Initialize variables for tracking the quote generation and display
let count = 0;
let str = '';
let interval;

// Define an asynchronous function to fetch a random quote from the API
async function getQuote() {
  const response = await fetch('https://api.quotable.io/random')
  const data = await response.json();
  return data.content
}

// Define an asynchronous function to display the quote one character at a time
async function typeOutQuote() {
  const quote = await getQuote(); // Fetch a new quote from the API
  console.log(quote)
  
  // Set up an interval to display each character of the quote one at a time
  interval = setInterval(() => {
    if (count < quote.length) {
       str += quote[count];
       count++;
       paragraph.innerHTML = str + '_'; // Update the displayed quote with the new character
    
    } else {
      clearInterval(interval); // Clear the interval when the entire quote has been displayed
    }
  }, 100);
}

typeOutQuote(); // Call the typeOutQuote function when the page first loads

// Define a function to generate a new quote and display it in the paragraph element
function generateQuotes() {
  clearInterval(interval); // Clear any existing intervals
  paragraph.innerHTML = ""; // Clear the displayed quote
  
  count = 0; // Reset the count variable
  str = ''; // Clear the previous quote
  
  typeOutQuote(); // Call the typeOutQuote function to generate and display a new quote
}
