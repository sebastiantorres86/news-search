import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import NewsList from "./Components/NewsList";

function App() {
  // Define Category and news
  const [category, saveCategory] = useState("");
  const [news, saveNews] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8a6f25f6e3c648e28284e6d4839366ad`;

      const answer = await fetch(url);
      const news = await answer.json();

      saveNews(news.articles);
    };
    consultAPI();
  }, [category]);

  return (
    <Fragment>
      <Header title="News Search" />

      <div className="container white">
        <Form saveCategory={saveCategory} />

        <NewsList 
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
