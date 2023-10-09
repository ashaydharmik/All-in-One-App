import React from "react";
import "./news.scss";
import profile from "../assets/profile.png";
const News = () => {
  return (
    <>
      <section className="main-container">
        <div className="sub-container">
          <div className="profile-container">
            <div className="profile-box">
              <div className="image-box">
                <img src={profile} alt="" />
              </div>
              <div className="content-box">
                <div className="profile-info">
                  <p>Ashay Dharmik</p>
                  <p>ashay@gmail.com</p>
                  <p className="username">ashay</p>
                </div>
                <div className="movie-info">
                  <button>Action</button>
                  <button>Romance</button>
                  <button>Triller</button>
                  <button>Horror</button>
                  <button>Horror</button>
                  <button>Horror</button>
                  <button>Horror</button>
                  <button>Horror</button>
                </div>
              </div>
            </div>
            <div className="temp-box">

            </div>
          </div>
          <div className="news-container"></div>
        </div>
      </section>
    </>
  );
};

export default News;
