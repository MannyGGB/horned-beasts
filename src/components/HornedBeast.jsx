import { useState } from "react";

export default function HornedBeast({
  title,
  imageUrl,
  description,
  handleShowSelectedBeast,
  horns,
}) {
  const [likes, setLikes] = useState(0);
  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <img
          src={imageUrl}
          alt="animal"
          title="animal"
          onClick={() =>
            handleShowSelectedBeast({ title, imageUrl, description })
          }
        />
        <p>{description}</p>
        <p>Number of horns: {horns}</p>
        <p onClick={handleLikes}>😍 {likes}</p>
      </div>
    </section>
  );
}
