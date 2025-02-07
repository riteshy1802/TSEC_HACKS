import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SkillCategory({ category }) {
    return (
        <Card>
        <CardHeader>
            <CardTitle className="flex items-center">
            <span className="mr-2">{category.icon}</span>
            {category.name}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
            {category.videos.slice(0, 3).map((video, index) => (
                <li key={index}>
                <Link href={video.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="text-left">
                    {video.title}
                    </Button>
                </Link>
                </li>
            ))}
            </ul>
            {category.videos.length > 3 && (
            <Button variant="outline" className="mt-4 w-full">
                View All {category.videos.length} Videos
            </Button>
            )}
        </CardContent>
        </Card>
    )
}

