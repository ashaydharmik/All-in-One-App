import React, { useEffect, useState } from "react";
import "./news.scss";
import profile from "../assets/profile.png";
const News = () => {
const [cardTitle, setCardTitle] = useState([])

useEffect(()=>{
  const storedCardTitle = localStorage.getItem("MovieDetails")
  if(storedCardTitle){
    const showTitle = JSON.parse(storedCardTitle)
    setCardTitle(showTitle)
  }
},[])

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
                  {
                    cardTitle.map((item,id)=>{
                      return(
                        <>
                        <button key={id}>{item}</button>
                        </>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className="temp-box">
                <div className="upper">
                  <p>2-02-2023</p>
                  <p>03:33 PM</p>
                </div>
                <div className="lower"></div>
            </div>
          </div>
          <div className="news-container"></div>
        </div>
      </section>
    </>
  );
};

export default News;
