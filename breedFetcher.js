const args = process.argv.splice(2)[0];

const request = require('request');

let url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

request(url, (error, response, body) => {
  console.log('statusCode: ', response && response.statusCode);
  
  const data = JSON.parse(body);
  console.log(data);
  console.log(data[0]['description']);
})