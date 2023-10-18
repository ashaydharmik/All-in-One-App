import React, { useEffect, useState } from "react";
import "./news.scss";
import profile from "../assets/profile.png";
// import rainy from "../assets/rainy.png";
import humidity from "../assets/humidity.png";
import temperature from "../assets/temp.png";
import wind from "../assets/wind.png";
import line from "../assets/line.png";
// import newsImg from "../assets/newsimg.png";
import axios from "axios";
import StopWatch from "./StopWatch";
import {  useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  const [cardTitle, setCardTitle] = useState([]);
  const [formData, setFormData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const WEATHER_API_URL = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY_WEATHER}&q=Bengaluru`;

  const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`;

  useEffect(() => {
    const storedCardTitle = localStorage.getItem("MovieDetails");
    const storedFromData = localStorage.getItem("formData");
  
    //getting card title from local storage
    if (storedCardTitle) {
      const showTitle = JSON.parse(storedCardTitle);
      setCardTitle(showTitle);
    }
  //getting from Data from local storage
    if (storedFromData) {
      const showFormData = JSON.parse(storedFromData);
      setFormData(showFormData);
    }

// fetching news api
    axios
    .get(NEWS_API_URL)
    .then((res) => {
      setNewsData(res.data.articles);
      // console.log(res);
      const randomIndex = Math.floor(
        Math.random() * res.data.articles.length
      );
      setCurrentNewsIndex(randomIndex);
    })
    .catch((err) => {
      console.log(err);
    });

// fetching weather api
    axios
      .get(WEATHER_API_URL)
      .then((res) => {
        // console.log(res);
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [NEWS_API_URL, WEATHER_API_URL]);
  

//for setting AM and PM in weather time
  const getTiming = () => {
    if (weatherData.current && weatherData.current.last_updated) {
      const lastUpdatedTime = new Date(weatherData.current.last_updated);
      const hours = lastUpdatedTime.getHours();
      return hours >= 12 ? "PM" : "AM";
    }
    return "";
  };


  const handleBrowse=()=>{
    navigate("/movie")
  }

  return (
    <>
      <section className="main-container">
        <div className="sub-container">
          <div className="left-container">
            <div className="top-profile">
              <div className="profile-temp">
                <div className="profile-box">
                  <div className="image-box">
                    <img src={profile} alt="" />
                  </div>
                  <div className="content-box">
                    <div className="profile-info">
                      <p>{formData.fname}</p>
                      <p>{formData.email}</p>
                      <p className="username">{formData.username}</p>
                    </div>
                    <div className="movie-info">
                      {cardTitle.map((item, id) => (
                        <button key={id}>{item}</button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="temp-box">
                  {weatherData && weatherData.current && (
                    <>
                      <div className="upper">
                        <p>
                          {weatherData.current.last_updated}
                          {getTiming()}
                        </p>
                      </div>
                      <div className="lower">
                        <div className="first">
                          <div className="row">
                            <img
                              src={weatherData.current.condition.icon}
                              alt=""
                            />
                            <p>{weatherData.current.condition.text}</p>
                          </div>
                          <div className="line">
                            <img src={line} alt="" />
                          </div>
                        </div>
                        <div className="second">
                          <div className="row">
                            <p>{weatherData.current.temp_c}&deg;C</p>
                            <p className="row2">
                          
                              <img src={temperature} alt="" />


                              <p>
                                {weatherData.current.pressure_mb} mbar pressure
                              </p>
                            
                            </p>
                          </div>
                          <div className="line">
                            <img src={line} alt="" />
                          </div>
                        </div>
                        <div className="third">
                          <div className="third-one">
                            <img src={wind} alt="" />
                            <p>
                              {weatherData.current.wind_kph}km/h
                              <br /> wind
                            </p>
                          </div>
                          <div className="third-two">
                            <img src={humidity} alt="" />
                            <p>
                              {weatherData.current.humidity}%<br />
                              Humidity
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="notes-container">
                <div className="notes">
                  <p>All notes</p>
                  <div className="note-text">
                    <textarea placeholder="Write a note!!" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-profile">
              <StopWatch/>
            </div>
          </div>
          <div className="right-container">
            {newsData.length > 0 && (
              <>
                <div className="news-image">
                  <img src={newsData[currentNewsIndex].urlToImage} alt="" />
                  <div className="news-title">
                    <p>{newsData[currentNewsIndex].title}</p>
                    <p className="news-date">
                      {newsData[currentNewsIndex].publishedAt}
                    </p>
                  </div>
                </div>
                <div className="news-content">
                  <p>{newsData[currentNewsIndex].description}</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="bottom-container">
          
          <button onClick={handleBrowse}>Browse</button>
       
        </div>
      </section>
    </>
  );
};

export default News;
