export default function SelectedBeast({ handleShowSelectedBeast }) {
  return (
    <div className="selectedBeast">
      <img src={imageUrl} alt="animal" title="animal" />
      <p>{description}</p>
      <button onClick={handleShowSelectedBeast}>Close</button>
    </div>
  );
}
