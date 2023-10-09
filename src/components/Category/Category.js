import React, { useEffect, useState } from "react";
import "./category.scss";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillWarning } from "react-icons/ai";
import { CategoryData } from "../Dataset/Data";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleSelection = (categoryId) => {
    if (selectedCategory.includes(categoryId)) {
      setSelectedCategory((prevSelection) =>
        prevSelection.filter((id) => id !== categoryId)
      );
    } else {
      setSelectedCategory((prevSelection) => [...prevSelection, categoryId]);
    }
  };

  const handleCancelCategory = (categoryId) => {
    setSelectedCategory((prevSelection) =>
      prevSelection.filter((id) => id !== categoryId)
    );
  };

  const handleNextButton = () => {
    if (selectedCategory.length >= 3) {
      setShowWarning(false);
      const selectedCardTitle = selectedCategory.map((categoryId)=>{
        const selectedCard = CategoryData.find((item)=> item.id === categoryId)
        return selectedCard ? selectedCard.title : "";
      })
      localStorage.setItem("MovieDetails", JSON.stringify(selectedCardTitle));
      navigate("/news");
    } else {
      setShowWarning(true);
    }
  };

  useEffect(() => {
    if (selectedCategory.length === 0) {
      setShowWarning(false);
    } else if (selectedCategory.length < 3) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [selectedCategory]);

  return (
    <>
      <section className="category-container">
        <div className="row">
          <div className="left-cat">
            <div className="heading">
              <h1>Super app</h1>
              <p>
                Choose your entertainment
                <br /> category
              </p>
            </div>
            <div className="selected-cat">
              {selectedCategory.map((categoryId) => {
                const selectedCard = CategoryData.find(
                  (item) => item.id === categoryId
                );
                return (
                  <button key={categoryId}>
                    {selectedCard && (
                      <>
                        {selectedCard.title}
                        <AiOutlineClose
                          onClick={() => handleCancelCategory(categoryId)}
                        />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
            {showWarning && (
              <div className="warning">
                <p>
                  <span>
                    <AiFillWarning />
                  </span>
                  Minimum 3 category required
                </p>
              </div>
            )}
          </div>
          <div className="right-cat">
            <div className="card">
              {CategoryData.map((item, id) => {
                const cardStyle = {
                  backgroundColor: item.background,
                  border: selectedCategory.includes(item.id)
                    ? "5px solid #11B800"
                    : "none",
                };

                return (
                  <div
                    className="card-item"
                    key={id}
                    style={cardStyle}
                    onClick={() => handleSelection(item.id)}
                  >
                    <p>{item.title}</p>
                    <div className="card-img">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bottom">
          <button onClick={handleNextButton}>Next Page</button>
        </div>
      </section>
    </>
  );
};

export default Category;
