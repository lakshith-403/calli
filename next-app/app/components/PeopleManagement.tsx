import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { X } from "lucide-react"

export default function PeopleManagement({ people, setPeople }) {
  const [newPerson, setNewPerson] = useState("")

  const handleAddPerson = () => {
    if (newPerson && !people.includes(newPerson)) {
      setPeople([...people, newPerson])
      setNewPerson("")
    }
  }

  const handleRemovePerson = (personToRemove) => {
    setPeople(people.filter((person) => person !== personToRemove))
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">People</h2>
      <div className="flex space-x-2">
        <Input placeholder="Add Person" value={newPerson} onChange={(e) => setNewPerson(e.target.value)} />
        <Button onClick={handleAddPerson}>Add</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {people.map((person) => (
          <Badge key={person} variant="secondary" className="text-sm py-1 px-2">
            {person}
            <X className="ml-1 h-4 w-4 cursor-pointer" onClick={() => handleRemovePerson(person)} />
          </Badge>
        ))}
      </div>
    </div>
  )
}

