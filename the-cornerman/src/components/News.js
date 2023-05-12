//2605a4e0d70b4450bf65f796c543f3f8
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
axios
  .get(' https://newsapi.org/v2/everything?q=MMA&apiKey=2605a4e0d70b4450bf65f796c543f3f8')
  .then(response => {
    setArticles(response.data.articles.slice(0, 5));
  })
  .catch(error => {
    console.log(error);
  })
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-header">Latest News</h1>
      <div className="news-card-container">
        {articles.map(article => (
          <div className="news-card" key={article.url}>
            <img className="news-card-image" src={article.urlToImage} alt="" />
            <div className="news-card-body">
              <h2 className="news-card-title">{article.title}</h2>
              <a className="news-card-link" href={article.url}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
