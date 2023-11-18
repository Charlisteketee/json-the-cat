const { fetchBreedDescription } = require('../breedFetcherRefactored');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns "Breed not found :(" for the description of an invalid breed via callback', (done) => {
    fetchBreedDescription('Candle', (err, desc) => {
      // expect an error (non-null) because the breed is not found
      assert.notEqual(err, null);

      // compare returned description to the expected error message
      assert.equal('Breed not found :(', desc);

      done();
    });
  });
});