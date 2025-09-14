"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import SearchBar from "./components/SearchBar"
import LoadingSpinner from "./components/LoadingSpinner"
import ContactList from "./components/ContactList"
import ContactModal from "./components/ContactModal"


export default function App() {
  const [contacts, setContacts] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedContact, setSelectedContact] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        const sortedContacts = response.data.sort((a, b) => a.name.localeCompare(b.name))
        setContacts(sortedContacts)
        setFilteredContacts(sortedContacts)
      } catch (error) {
        console.error("Error fetching contacts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchContacts()
  }, [])

  useEffect(() => {
    const filtered = contacts.filter((contact) => {
      const searchLower = searchTerm.toLowerCase()
      return (
        contact.name.toLowerCase().includes(searchLower) ||
        contact.email.toLowerCase().includes(searchLower) ||
        contact.phone.toLowerCase().includes(searchLower)
      )
    })
    const sortedFiltered = filtered.sort((a, b) => a.name.localeCompare(b.name))
    setFilteredContacts(sortedFiltered)
  }, [searchTerm, contacts])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleContactClick = (contact) => {
    setSelectedContact(contact)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedContact(null)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-card border-b border-border px-4 py-3 sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-foreground">Contacts</h1>
      </header>

      <div className="px-4 py-3 bg-card border-b border-border">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex-1 overflow-auto">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : (
          <ContactList contacts={filteredContacts} onContactClick={handleContactClick} />
        )}

        {!loading && filteredContacts.length === 0 && searchTerm && (
          <div className="text-center py-12 px-4">
            <p className="text-muted-foreground">No contacts found</p>
          </div>
        )}
      </div>

      <ContactModal contact={selectedContact} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
