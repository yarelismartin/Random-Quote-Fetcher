// $.ajax({
//   method: 'GET',
//   url: `https://api.api-ninjas.com/v1/quotes?category=${category}`,
//   headers: { 'X-Api-Key': 'YOUR_API_KEY' },
//   contentType: 'application/json',
//   success(result) {
//     console.log(result);
//   },
//   error: function ajaxError(jqXHR) {
//     console.error('Error: ', jqXHR.responseText);
//   },
// });

const getQuote = () => new Promise((resolve, reject) => {
  fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: {
      'X-Api-Key': 'rQ1JK0BB33KDWgZQp1im5w==wzELqsZNgl8zV2tm',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getQuote;
