export default function SelectedBeast({
  handleShowSelectedBeast,
  toggleImage,
}) {
  return (
    <div className="selectedBeast" onClick={handleShowSelectedBeast}>
      <h2>{toggleImage.title}</h2>
      <img src={toggleImage.imageUrl} alt="animal" title="animal" />
      <p>{toggleImage.description}</p>
    </div>
  );
}
