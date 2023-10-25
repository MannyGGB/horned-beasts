export default function SelectedBeast({
  handleShowSelectedBeast,
  handleToggleImage,
}) {
  return (
    <div className="selectedBeast">
      <img src={imageUrl} alt="animal" title="animal" />
      <p>{description}</p>
      <button onClick={handleShowSelectedBeast && handleToggleImage}>
        Close
      </button>
    </div>
  );
}
