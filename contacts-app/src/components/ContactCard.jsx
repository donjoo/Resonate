
export default function ContactCard({ contact, onClick }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div
      className="flex items-center px-4 py-3 hover:bg-accent/50 cursor-pointer transition-colors active:bg-accent/70"
      onClick={() => onClick(contact)}
    >
      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0">
        <span className="text-accent-foreground font-medium text-sm">{getInitials(contact.name)}</span>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base font-medium text-foreground truncate">{contact.name}</h3>
        <p className="text-sm text-muted-foreground truncate">{contact.phone}</p>
      </div>
    </div>
  )
}
