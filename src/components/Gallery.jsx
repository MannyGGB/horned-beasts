import HornedBeast from "./HornedBeast";
//when we import, we can use "hornedBeast" directly without declaring a variable

//every function needs a return; in this case, we have two returns

export default function Gallery({ data, handleShowSelectedBeast }) {
  return (
    // you can't declare variables inside the return
    <section className="animal-section">
      {data.map(function (beast) {
        // the .map method takes two parameters max (one is the array item, the other is the index)
        return (
          <HornedBeast
            key={beast._id}
            title={beast.title} // we can access the beast properties with dot notation
            imageUrl={beast.image_url}
            description={beast.description}
            onClick={handleShowSelectedBeast}
          />
        );
      })}
    </section>
  );
}
