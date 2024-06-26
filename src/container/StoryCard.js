import React from "react";
import { Link } from "react-router-dom";

const StoryCard = ({ data }) => {

  
  const getStatusClass = (status) => {
    console.log(status); // For debugging purposes
    switch (status) {
      case "Published":
        return "blue";
      case "Draft":
        return "btn-new";
      case "In Progress":
        return "btn-inProgress";
      case "Completed":
        return "btn-completed";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="card">
        <Link to={`/story/${data?._id}`}>
          <img
            className="card-image"
            src={`https://ik.imagekit.io/dev24/${data?.Image[0]}`}
            alt={data?.Title}
          />
          <p className="card-title">{data?.Title}</p>
        
        <button
          
          className={`read-more-button ${getStatusClass(data?.Status)}`}
          href=""
        >
          {data?.Status}
        </button>
        </Link>
      </div>
    </>
  );
};

export default StoryCard;
