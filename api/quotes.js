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
