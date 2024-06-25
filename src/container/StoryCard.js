import React from 'react'
import { Link } from "react-router-dom";

const StoryCard = ({data}) => {
  // console.log(data,"data")
  return (
    <div className="card">
    <img
      className="card-image"
      src={`https://ik.imagekit.io/dev24/${data?.Image[0]}`}
      alt={data?.Title}
    />
    <p className="card-title">{data?.Title}</p>
    <Link className="read-more-button" to={`/story/${data?._id}`}>
      {data?.Status}
    </Link>
  </div>
  )
}

export default StoryCard