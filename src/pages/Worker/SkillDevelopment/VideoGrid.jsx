import { Card, CardContent } from "@/components/ui/card"
import { Image } from "@radix-ui/react-avatar"

export default function VideoGrid({ videos }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
            <Card key={video.url}>
            <CardContent className="p-4">
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                    src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.url)}/0.jpg`}
                    alt={video.title}
                    width={320}
                    height={180}
                    className="w-full rounded-md mb-2"
                />
                <h3 className="font-semibold text-sm line-clamp-2">{video.title}</h3>
                </a>
            </CardContent>
            </Card>
        ))}
        </div>
    )
}

function getYouTubeVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
}

