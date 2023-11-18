const request = require('request');

// command line is just node breedFetcher.js for this request
request("https://api.thecatapi.com/v1/breeds/search?q=sib", (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  // JSON.parse changes it from a string to an object, making it look more structured
  const data = JSON.parse(body);
  // Prints out the description only rather than each value of the object
  const firstEntry = data[0];
  console.log('Description:', firstEntry.description);
  console.log(typeof data);
});

// Allow the user to specify the breed name using command-line arguments.

// Search breed type using 2nd index in command line: node breedFetcher.js Chartreux
const breedToSearch = process.argv[2];

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedToSearch}`;

// use the above apiUrl to search
request(apiUrl, (error, response, body) => {
  // check if there is an error during the request
  if (error) {
    console.log('Request error:', error); // Print the error if one occurred
    return;
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  const data = JSON.parse(body);

  // check if there is at least one entry in the parsed data object
  if (data.length > 0) {
    // access the first entry and console.log the description
    const firstEntry = data[0];
    console.log('Description:', firstEntry.description);
  } else {
    console.log('Breed not found :(');
  }
});