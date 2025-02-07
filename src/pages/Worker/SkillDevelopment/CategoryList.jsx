import { Button } from "@/components/ui/button";

export default function CategoryList({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
                <Button
                    key={category.name}
                    onClick={() => onSelectCategory(category.name)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all 
                        ${selectedCategory === category.name 
                            ? "bg-[#bfbfbf] text-black shadow-md hover:text-white" 
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`
                    }
                >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                </Button>
            ))}
        </div>
    );
}