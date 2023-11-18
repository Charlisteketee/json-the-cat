const { fetchBreedDescription } = require('./breedFetcherRefactored');

const breedName = process.argv[2];

// Fetch the breed descrription through commandline interface: node index.js siberian
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
});