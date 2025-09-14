
import { Mail, Phone, Globe, Building, X, MapPin, MessageCircle } from "lucide-react"

export default function ContactModal({ contact, isOpen, onClose }) {
  if (!isOpen || !contact) return null

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
        <h2 className="text-lg font-medium text-foreground">Contact</h2>
        <div className="w-9 h-9" /> {/* Spacer for centering */}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="bg-card px-6 py-8 text-center border-b border-border">
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-accent-foreground font-semibold text-2xl">{getInitials(contact.name)}</span>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-1">{contact.name}</h3>
          <p className="text-muted-foreground">@{contact.username}</p>
        </div>

        <div className="flex justify-center gap-8 py-6 bg-card border-b border-border">
          <a
            href={`tel:${contact.phone}`}
            className="flex flex-col items-center gap-2 p-3 hover:bg-muted rounded-lg transition-colors"
          >
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-muted-foreground">Call</span>
          </a>
          <button className="flex flex-col items-center gap-2 p-3 hover:bg-muted rounded-lg transition-colors">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-muted-foreground">Message</span>
          </button>
          <a
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center gap-2 p-3 hover:bg-muted rounded-lg transition-colors"
          >
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-muted-foreground">Mail</span>
          </a>
        </div>

        <div className="bg-background">
          <div className="bg-card border-b border-border">
            <div className="px-4 py-3 border-b border-border/50">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">mobile</p>
                  <a href={`tel:${contact.phone}`} className="text-foreground">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="px-4 py-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">email</p>
                  <a href={`mailto:${contact.email}`} className="text-foreground">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border-b border-border mt-4">
            <div className="px-4 py-3 border-b border-border/50">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">website</p>
                  <a
                    href={`http://${contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {contact.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 border-b border-border/50">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">company</p>
                  <p className="text-foreground">{contact.company.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.company.catchPhrase}</p>
                </div>
              </div>
            </div>

            <div className="px-4 py-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">address</p>
                  <p className="text-foreground">
                    {contact.address.street}, {contact.address.suite}
                  </p>
                  <p className="text-foreground">
                    {contact.address.city}, {contact.address.zipcode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
