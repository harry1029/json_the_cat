const fetchBreedDescription = function(breedName, callback) {

  const request = require('request');

  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // console.log('statusCode: ', response && response.statusCode);
    
    const data = JSON.parse(body);
    // console.log(data);

    if (data.length === 0) {
      error = "Invalid/Non-existent breed is passed in!";
      callback(error);
    } else {
      callback(error, data[0]['description']);
    }

  });

};

module.exports = {fetchBreedDescription};