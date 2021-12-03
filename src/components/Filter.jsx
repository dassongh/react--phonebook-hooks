export default function Filter({ onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={onChange} />
    </label>
  );
}
