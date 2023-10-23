export default function HornedBeast(props) {
  return (
    <section>
      <div>
        <h2>{props.title}</h2>
        <img src={props.imageUrl} alt="animal" title="animal" />
        <p>{props.description}</p>
      </div>
    </section>
  );
}
