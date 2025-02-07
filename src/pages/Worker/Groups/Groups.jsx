import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { workerTypes } from "./workerTypes"
import { MessageCircle, Users } from "lucide-react"

export default function Groups() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Construction Worker Communities</h1>
          <p className="text-xl text-gray-600">Connect with professionals in your trade</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-4">
          {workerTypes.map((workerType) => (
            <Card
              key={workerType.id}
              className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader className="bg-gray-50 pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">{workerType.name}</CardTitle>
                  <Users className="h-6 w-6 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-gray-600 mb-4">{workerType.description}</CardDescription>
                <div className="flex items-center text-sm text-gray-500">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Active community discussions</span>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50">
                <Button asChild className="w-full">
                  <a
                    href={workerType.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Join {workerType.name} Group
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

