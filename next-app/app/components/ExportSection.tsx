import { Button } from "./ui/button"

export default function ExportSection({ project, people, transactions }) {
  const handleExport = () => {
    // Implement PDF export logic here
    console.log("Exporting to PDF...")
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Export</h2>
      <Button onClick={handleExport}>Export to PDF</Button>
    </div>
  )
}

