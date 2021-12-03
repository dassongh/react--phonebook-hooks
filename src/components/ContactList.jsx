import Filter from './Filter';
import Contact from './Contact';

export default function ContactList({ contacts, onFilter, onRemove }) {
  return (
    <div>
      <Filter onChange={onFilter} />
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} onRemove={onRemove} />
        ))}
      </ul>
    </div>
  );
}
