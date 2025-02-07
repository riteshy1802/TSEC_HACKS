import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input type="text" placeholder="Search jobs, skills, or companies" className="pl-10 w-full" />
    </div>
  )
}

