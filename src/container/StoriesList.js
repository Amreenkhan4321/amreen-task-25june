import axios from "axios";
import React, { useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import Header from "../components/Header";
import ClipLoader from "react-spinners/ClipLoader";

const StoriesList = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  // console.log(stories, 100);

  const getList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://child.onrender.com/api/sciencefiction"
      );
      setStories(response.data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

const filteredStories = stories.filter((data)=>{
  if(filter === "all") return true;
  return data?.Status === filter
})
console.log(filteredStories,"filteredStories")

  return (
    <div className="story-page">
      <Header />
      <div className="center-title">
        <h1>Science Fiction Stories</h1>
      </div>
      <div className="btn-main">
        <button onClick={() => setFilter("Draft")} class="btn new">New</button>

        <button onClick={() => setFilter("In Progress")} class="btn progress">In Progress</button>

        <button onClick={() => setFilter("Completed")} class="btn completed">Completed</button>

        <button onClick={() => setFilter("all")} class="btn clear">Clear All</button>
      </div>
      <div className="story-list">
        {loading ? (
          <div className="custom-loder">
            <ClipLoader color="blue" />
          </div>
        ) : (
          filteredStories?.map((story) => <StoryCard key={story._id} data={story} />)
        )}
      </div>
    </div>
  );
};

export default StoriesList;
