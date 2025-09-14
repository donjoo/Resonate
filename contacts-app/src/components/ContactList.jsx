
import ContactCard from "./ContactCard"

export default function ContactList({ contacts, onContactClick }) {
  return (
    <div className="divide-y divide-border">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onClick={onContactClick} />
      ))}
    </div>
  )
}
