import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Components/News.css";
import Card from "./Card";
const News = () => {
  const [search, setSearch] = useState("india");
  const [newsdata, setnewsdata] = useState();
  const key = "99dff9fb9b8747beb79dfe1e8bce88e5";
  const handleData = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${key}`
    );
    const jsondata = await res.json();
    // console.log(jsondata.articles);
    setnewsdata(jsondata.articles || []);
  };
  useEffect(() => {
    handleData();
  }, []);

  const handleInput = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handlebutton = (e) => {
    setSearch(e.target.value);
    handleData();
  };

  return (
    <>
      <nav>
        <h1>Daily News</h1>
        <ul>
          <a href="">Home</a>
         
        </ul>
        <div className="search-bar">
          <input
            type="text"
            placeholder="search here ..."
            onChange={handleInput}
            value={search}
          />
          <button onClick={handleData} >
            Search
          </button>
        </div>
      </nav>
      <p className="heading">Stay updated</p>
      <div className="allButton">
        <button onClick={handlebutton} value={"sports"}>
          sports
        </button>
        <button onClick={handlebutton} value={"politics"}>
          politics
        </button>
        <button onClick={handlebutton} value={"movies"}>
        movies
        </button>
        <button onClick={handlebutton} value={"war"}>
        war
        </button>
      </div>
      <div>
        <Card data={newsdata} />
      </div>
    </>
  );
};

export default News;
