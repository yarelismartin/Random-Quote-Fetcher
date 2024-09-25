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

  useEffect(() => {
    getSingleQuote();
  }, []); // Empty dependency array to ensure it runs only once on mount

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
