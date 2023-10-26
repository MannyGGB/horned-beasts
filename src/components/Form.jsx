export default function Form({ handleChange }) {
  return (
    <>
      <h2>Filter Animals</h2>
      <form>
        <label htmlFor="horns">How many horns?</label>
        <select onChange={handleChange} name="horns" id="horns">
          <option value="all">All animals</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </form>
    </>
  );
}
