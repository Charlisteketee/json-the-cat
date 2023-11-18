const request = require('request');

// Allow the user to specify the breed name using command-line arguments through index.js

// Function that takes in 2 parameters: breedName, and a callback function that is invoked once the async opertation is completed(http request)
const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    // check if there is an error during the request
    if (error) {
      callback(error, null); // Pass the error through the callback, with null for the description
      return;
    }
    
    // if the request is successful, parse the JSON response
    const data = JSON.parse(body);
  
    // check if there is at least one entry in the parsed data
    if (data.length > 0) {
      // Access the first entry
      const firstEntry = data[0];
      const description = firstEntry.description;
      callback(null, description);
    } else {
      callback('Breed not found :(', null); // If there are no entries, pass this message to the callback
    }
  });
};

module.exports = { fetchBreedDescription };
