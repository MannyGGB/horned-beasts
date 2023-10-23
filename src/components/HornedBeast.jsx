import Gallery from "./Gallery";

export default function HornedBeast(props) {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="animal" title="animal" />
        <p>{description}</p>
      </div>
    </section>
  );
}
