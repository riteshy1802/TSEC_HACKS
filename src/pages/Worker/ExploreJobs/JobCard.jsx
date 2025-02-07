import { Star, MapPin, Clock, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {useNavigate} from 'react-router-dom'
import { updateJobDetails } from "@/redux/Jobs/JobDetailsSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export function JobCard({ job, onViewDetails }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleJobClicked = () => {
    navigate(`/worker/explore-jobs/${job.id}`);
    dispatch(updateJobDetails(job));
    console.log(job.id)
  }

  const handleApplyDirectly = () => {
    toast.success("Applied successfully!",{
      position:'top-right',
      duration:2000
    })
  }

  return (
    <Card className="w-full hover:bg-[#f7f7f7] transition duration-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div>
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
            </div>
          </div>
          <Button variant="outline" size="icon">
            <BookmarkPlus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold">{job.salary}</p>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{job.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>
            {job.location} ({job.distance})
          </span>
        </div>
        <div className="flex items-cen
        ter text-sm text-gray-600">
          <Clock className="h-4 w-4 mr-1" />
          <span>{job.postedTime}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
      <Button variant="outline"  className="w-[48%]" onClick={handleJobClicked}>
          View Details
        </Button>
        <Button className="w-[48%]" onClick={handleApplyDirectly}>Apply</Button>
      </CardFooter>
    </Card>
  )
}

