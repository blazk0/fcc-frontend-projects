import React, { useEffect, useState } from 'react';

import './App.css';
import { Quote, Quotes } from './@types';

const apiUrl =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const App = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    try {
      const res = await fetch(apiUrl);
      const data: Quotes = await res.json();

      setQuotes(data.quotes);

      getRandomQuote(data.quotes);
    } catch (err) {}
  };

  const getRandomQuote = (quotesData: Quote[]) => {
    setQuote(quotesData[Math.floor(Math.random() * quotesData.length)]);
  };

  return (
    <div id="quote-box">
      <h2 id="text">
        <i className="fa fa-quote-left"></i>
        {quote ? quote.quote : 'Loading...'}
      </h2>

      <p id="author">- {quote?.author}</p>

      <div className="row">
        <span>
          <a
            id="tweet-quote"
            className="btn twitter"
            href="twitter.com/intent/tweet"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a className="btn">
            <i className="fab fa-tumblr"></i>
          </a>
        </span>

        <button
          id="new-quote"
          onClick={() => getRandomQuote(quotes)}
          className="btn"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
