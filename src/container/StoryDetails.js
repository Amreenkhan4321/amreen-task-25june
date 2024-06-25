import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
const StoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('storyadventure');
  console.log("selectedCategory", selectedCategory);
  console.log("story", story);

  useEffect(() => {
    const fetchStoryData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://child.onrender.com/api/sciencefiction/${id}`
          );
          const data = response.data;
          setStory(data);
        } catch (error) {
          console.error("Error fetching story:", error);
        }
      } else {
        console.log("No story id provided.");
      }
    };
    fetchStoryData();
    
  }, [id]);

  return (
    <>
      <div className="story-details">
    <Header/>

        <div className="center-title">
          <h1><span className="blue">The Lost City of</span> Future Earth</h1>
        </div>
        <div className="btn-main">
          <button onClick={() => setSelectedCategory('Wordexplore')} class="btn">Word Explorer</button>

          <button onClick={() => setSelectedCategory('storyadventure')} class="btn">Story Adventure</button>

          <button onClick={() => setSelectedCategory('Brainquest')} class="btn">Brain Quest</button>
        </div>
        <div className="story-details-head-title">
          <h1>
            Drag Pictures to the matching Words, light up correct pairs, shake
            for a retry
          </h1>
        </div>
        <div className="story-details-card">
          <div className="card1 border-card">
            <p className="card-title">{story?.Title}</p>
            <img
              className="card-image"
              src={`https://ik.imagekit.io/dev24/${story?.Image[0]}`}
              alt={story?.title}
            />
          </div>
          <div className="story-card2">
            {story?.Storyadvenure?.content?.map((data) => (
              <>
                {
                
                 (
                  <div key={data?._id} className="card2">
                    
                    <img
                      className="card-image"
                      src={`https://ik.imagekit.io/dev24/${data?.Storyimage[0]}`}
                      alt="image"
                    />
                    <p className="card-para">
                      {data?.Paragraph[0]}
                    </p>
                  </div>
                ) 
               
                }
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryDetails;
