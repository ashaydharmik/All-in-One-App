import React, { useState } from "react";
import "./category.scss";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillWarning } from "react-icons/ai";
import {CategoryData} from "../Dataset/Data"
import action from "../assets/action.png"

const Category = () => {


  return (
    <>
      <section className="category-container">
        <div className="row">
          <div className="left-cat">
            <div className="heading">
              <h1>Super app</h1>
              <p>Choose your entertainment<br/> category</p>
            </div>
            <div className="selected-cat">
              {
                CategoryData.map((item,id)=>{
                  return(
                    <button key={id}>
                {item.title}
                <AiOutlineClose />
                </button>
                  )
                })
              }
            </div>
            <div className="warning">
              <p>
                <span>
                  <AiFillWarning />
                </span>
                Minimum 3 category required
              </p>
            </div>
          </div>
          <div className="right-cat">
            <div className="card">
              <div className="card-item">
                <p>Action</p>
                <div className="card-img">
                  <img src={action} alt=""/>
                </div>
              </div>
              <div className="card-item">
                <p>Action</p>
                <div className="card-img">
                  <img src={action} alt=""/>
                </div>
              </div>
              <div className="card-item">
                <p>Action</p>
                <div className="card-img">
                  <img src={action} alt=""/>
                </div>
              </div>
              </div>
              <div className="card">
              <div className="card-item">
                <p>Action</p>
                <div className="card-img">
                  <img src={action} alt=""/>
                </div>
              </div>
              <div className="card-item">
                <p>Action</p>
                <div className="card-img">
                  <img src={action} alt=""/>
                </div>
              </div>
              <div className="card-item">
                <p>Action</p>
                <div className="card-img">
                  <img src={action} alt=""/>
                </div>
              </div>
              </div>
              <div className="card">
              <div className="card-item">
                <p>Action</p>
                <div className="card-img">
                  <img src={action} alt=""/>
                </div>
              </div>
              <div className="card-item">
                <p>Action</p>
                <div className="card-img">
                  <img src={action} alt=""/>
                </div>
              </div>
              <div className="card-item">
                <p>Action</p>
                <div className="card-img">
                  <img src={action} alt=""/>
                </div>
              </div>
              </div>
            </div>
          </div>
      
        <div className="bottom">
          <button>Next Page</button>
        </div>
      </section>
    </>
  );
};

export default Category;
