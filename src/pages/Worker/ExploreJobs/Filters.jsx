import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Filters() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nearby">Nearby</SelectItem>
          <SelectItem value="city">City-based</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Salary Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-1000">Rs. 0 - Rs. 1000</SelectItem>
          <SelectItem value="1000-2000">Rs. 1000 - Rs. 2000</SelectItem>
          <SelectItem value="2000+">Rs. 2000+</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Employer Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="4+">4+ Stars</SelectItem>
          <SelectItem value="3+">3+ Stars</SelectItem>
          <SelectItem value="2+">2+ Stars</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline">Apply Filters</Button>
    </div>
  )
}

