import axios from "axios";
import React, { useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import Header from "../components/Header";
import ClipLoader from "react-spinners/ClipLoader";

const StoriesList = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(stories, 100);

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

  return (
    <div className="story-page">
      <Header />
      <div className="center-title">
        <h1>Science Fiction Stories</h1>
      </div>
      <div className="btn-main">
        <button class="btn new">New</button>

        <button class="btn progress">In Progress</button>

        <button class="btn completed">Completed</button>

        <button class="btn clear">Clear All</button>
      </div>
      <div className="story-list">
        {loading ? (
          <div className="custom-loder">
            <ClipLoader color="blue" />
          </div>
        ) : (
          stories.map((story) => <StoryCard key={story._id} data={story} />)
        )}
      </div>
    </div>
  );
};

export default StoriesList;
