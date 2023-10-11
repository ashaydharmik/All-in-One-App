import React, { useEffect, useState } from "react";
import "./news.scss";
import profile from "../assets/profile.png";
import rainy from "../assets/rainy.png";
import humidity from "../assets/humidity.png";
import temperature from "../assets/temp.png";
import wind from "../assets/wind.png";
import line from "../assets/line.png";
import newsImg from "../assets/newsimg.png";
import axios from "axios";
// import REACT_APP_API_KEY from ""

const News = () => {
  const [cardTitle, setCardTitle] = useState([]);
  const [formData, setFormData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=India`;

  useEffect(() => {
    const storedCardTitle = localStorage.getItem("MovieDetails");
    if (storedCardTitle) {
      const showTitle = JSON.parse(storedCardTitle);
      setCardTitle(showTitle);
    }
  }, []);

  useEffect(() => {
    const storedFromData = localStorage.getItem("formData");
    if (storedFromData) {
      const showFormData = JSON.parse(storedFromData);
      setFormData(showFormData);
    }
  }, []);

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
                  <div className="upper">
                    <p>2-02-2023</p>
                    <p>03:33 PM</p>
                  </div>
                  <div className="lower">
                    <div className="first">
                      <div className="row">
                        <img src={rainy} alt="" />
                        <p></p>
                      </div>
                      <div className="line">
                        <img src={line} alt="" />
                      </div>
                    </div>
                    <div className="second">
                      <div className="row">
                        <p>24&deg;C</p>
                        <p>
                          <img src={temperature} alt="" />
                          <span>1010 mbar pressure</span>
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
                          3.7km/hr
                          <br /> wind
                        </p>
                      </div>
                      <div className="third-two">
                        <img src={humidity} alt="" />
                        <p>
                          87% <br />
                          Humidity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notes-container">
                <div className="notes">
                  <p>All notes</p>
                  <div className="note-text">
                    <textarea placeholder="write a note" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-profile"></div>
          </div>
          <div className="right-container">
            <div className="news-image">
              <img src={newsImg} alt="" />
            </div>
            <div className="news-title">
              <p>Want to climb Mount Everest?</p>
              <p>
                <span>2-02-2023</span>
                <span className="line">
                  <img src={line} alt="" />
                </span>
                <span>03:33 PM</span>
              </p>
            </div>
            <div className="news-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum obcaecati molestias, eaque laborum ab voluptatem est non expedita, tempora, distinctio saepe ex hic labore assumenda quibusdam laudantium unde eligendi iusto dignissimos recusandae necessitatibus! Eligendi molestiae nobis unde alias maxime beatae, reprehenderit consequatur nostrum doloremque et numquam totam iure, id provident?</p>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <button>Browse</button>
        </div>
      </section>
    </>
  );
};

export default News;
