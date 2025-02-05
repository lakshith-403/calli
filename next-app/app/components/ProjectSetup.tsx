import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function ProjectSetup({ setActiveProject }) {
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")

  const handleCreateProject = () => {
    if (projectName) {
      setActiveProject({ name: projectName, description: projectDescription })
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Create New Project</h2>
      <Input placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
      <Textarea
        placeholder="Project Description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />
      <Button onClick={handleCreateProject}>Create Project</Button>
    </div>
  )
}

