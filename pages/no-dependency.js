import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import getQuote from '../api/quotes';

export default function NoDependency() {
  const [randomQuote, setRandomQuote] = useState({});

  const getSingleQuote = () => {
    getQuote().then((data) => {
      if (data.length > 0) {
        setRandomQuote(data[0]);
      }
    });
  };

  // Fetch a quote on initial render
  useEffect(() => {
    getSingleQuote();
  }); // No Dependency (Run on Every Render)

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
