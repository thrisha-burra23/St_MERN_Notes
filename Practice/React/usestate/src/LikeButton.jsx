import { useState } from "react";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

 let  likeStyle={color:"red"}

  const toggleButton = () => {
    console.log("toggel Button");
    setIsLiked(!isLiked);
  };
  return (
    <div>
      <p onClick={toggleButton}>
        {isLiked ? (
          <i className="fa-solid fa-heart"  style={likeStyle}></i> 
        ) : (
          <i className="fa-regular fa-heart" ></i>
        )}
      </p>
    </div>
  );
};

export default LikeButton;
