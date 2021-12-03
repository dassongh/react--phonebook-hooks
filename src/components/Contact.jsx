export default function Contact({ name, number, onRemove }) {
  return (
    <li className="item">
      {name}: {number}
      <button className="rmv-btn" type="button" onClick={onRemove}>
        remove
      </button>
    </li>
  );
}
