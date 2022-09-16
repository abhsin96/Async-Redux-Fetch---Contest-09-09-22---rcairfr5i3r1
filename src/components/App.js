import React, { useEffect } from "react";
import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
// import { actions } from "./store";
import { fetchAsync, updateNumber } from "./action";

const API_KEY = "fc469a2bcb2b46fea20a1bb315257c2a"; //Get your own api key from newsapi

const App = () => {
  const dispatch = useDispatch();
  // const newsObj = useSelector();
  const { articles, articlesNum } = useSelector((store) => store.hotNews);
  useEffect(() => {
    dispatch(
      fetchAsync(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      )
    );
    setTimeout(() => {
      console.log(articles);
    }, 3000);
  }, []);

  const numChangeHandler = (e) => {
    dispatch(updateNumber(e.target.value));
  };

  // let articles = [];

  let filteredArticles = articles;

  return (
    <div id="main">
      <h2>Top News Articles</h2>
      <div>
        <label htmlFor="num">Enter Number of articles</label>
        <input
          type="number"
          id="num"
          onChange={numChangeHandler}
          min={1}
        ></input>
      </div>
      {articlesNum !== 0 ? (
        <div>
          <h3>Top {articlesNum} articles</h3>
          <ul id="articles">
            {articles.map((item) => {
              return (
                <li>
                  <div className="article">
                    Author: {item.author}
                    <h2>{item.title}</h2>
                    <img src={item.urlToImage}></img>
                    <p>
                      {item.content === null
                        ? "No Content for this article"
                        : item.content}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Please wait Loading...</p>
      )}
    </div>
  );
};

export default App;
