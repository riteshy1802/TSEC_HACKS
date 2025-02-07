import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"
import { Link } from "react-router-dom"



export function JobCard({ title, startDate, endDate, onViewMore }) {
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>
            {formatDate(startDate)} - {formatDate(endDate)}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={"/employer/attendence"}>
          <Button onClick={onViewMore}>Attendence </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

