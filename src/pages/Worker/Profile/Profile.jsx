import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { PlusCircle } from "lucide-react"

export default function UserProfile() {
    const [user, setUser] = useState({
        name: "John Doe",
        profileImage: "/placeholder.svg",
        status: "unoccupied",
        aadharNumber: "",
        mobileNumber: "",
        skills: ["Plastering", "Painting"],
    })

    const [newSkill, setNewSkill] = useState("")

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
        }))
    }

    const handleStatusChange = (value) => {
        setUser((prevUser) => ({
        ...prevUser,
        status: value,
        }))
    }

    const handleAddSkill = () => {
        if (newSkill && !user.skills.includes(newSkill)) {
        setUser((prevUser) => ({
            ...prevUser,
            skills: [...prevUser.skills, newSkill],
        }))
        setNewSkill("")
        }
    }

    const handleRemoveSkill = (skillToRemove) => {
        setUser((prevUser) => ({
        ...prevUser,
        skills: prevUser.skills.filter((skill) => skill !== skillToRemove),
        }))
    }

    return (
        <div className="container py-8">
            <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
                <div className="flex items-center space-x-4 mb-6">
                <Avatar className="w-24 h-24">
                    <AvatarImage src={user.profileImage} alt={user.name} />
                    <AvatarFallback>
                        {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        }
                    </AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <Badge variant={user.status === "occupied" ? "destructive" : "success"}>
                    {user.status === "occupied" ? "Occupied" : "Available"}
                    </Badge>
                </div>
                </div>

                <form className="space-y-4">
                <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={user.name} onChange={handleInputChange} required />
                </div>

                <div>
                    <Label htmlFor="aadharNumber">Aadhar Card Number</Label>
                    <Input
                    id="aadharNumber"
                    name="aadharNumber"
                    value={user.aadharNumber}
                    onChange={handleInputChange}
                    pattern="\d{12}"
                    maxLength="12"
                    required
                    />
                </div>

                <div>
                    <Label htmlFor="mobileNumber">Mobile Number</Label>
                    <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    value={user.mobileNumber}
                    onChange={handleInputChange}
                    pattern="\d{10}"
                    maxLength="10"
                    required
                    />
                </div>

                <div>
                    <Label>Work Status</Label>
                    <RadioGroup value={user.status} onValueChange={handleStatusChange} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unoccupied" id="unoccupied" />
                        <Label htmlFor="unoccupied">Available</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="occupied" id="occupied" />
                        <Label htmlFor="occupied">Occupied</Label>
                    </div>
                    </RadioGroup>
                </div>

                <div>
                    <Label>Skills</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                    {user.skills.map((skill) => (
                        <Badge
                        key={skill}
                        variant="secondary"
                        className="cursor-pointer"
                        onClick={() => handleRemoveSkill(skill)}
                        >
                        {skill} ✕
                        </Badge>
                    ))}
                    </div>
                    <div className="flex space-x-2">
                    <Input placeholder="Add a new skill" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
                    <Button type="button" size="icon" onClick={handleAddSkill}>
                        <PlusCircle className="h-4 w-4" />
                    </Button>
                    </div>
                </div>

                <Button type="submit" className="w-full">
                    Save Profile
                </Button>
                </form>
            </div>
        </div>
    )
}

