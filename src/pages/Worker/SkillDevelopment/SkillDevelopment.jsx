import { useState } from "react"
import CategoryList from "./CategoryList"
import VideoGrid from "./VideoGrid"
import { categories } from "./categories"


export default function SkillDevelopmentPage() {
    const [selectedCategory, setSelectedCategory] = useState("Plastering")

    return (
        <div className="container mx-auto py-8 px-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Skill Development</h1>
            <CategoryList categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
            {selectedCategory && <VideoGrid videos={categories.find((c) => c.name === selectedCategory).videos} />}
        </div>
    )
}
