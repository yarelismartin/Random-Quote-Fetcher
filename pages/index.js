import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import getQuote from '../api/quotes';

export default function Home() {
  const [randomQuote, setRandomQuote] = useState({});

  const getSingleQuote = () => {
    getQuote().then((data) => {
      // If the API returns an array of quotes, use the first one
      if (data.length > 0) {
        setRandomQuote(data[0]);
      }
    });
  };

  // Fetch a quote on initial render
  useEffect(() => {
    getSingleQuote();
  }, []); // Empty dependency (Run Once on Mount)

  return (
    <>
      <h1>Get your quote today!</h1>
      <p>{randomQuote?.quote}</p>
      <p>{randomQuote?.author}</p>
      <p>{randomQuote?.category}</p>
      <Button onClick={getSingleQuote}> New Quote</Button>
    </>
  );
}
