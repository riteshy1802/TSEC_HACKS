import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HardHat,
  Hammer,
  Truck,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

const initialJobCards = [
  {
    id: 1,
    jobTitle: "Skilled Carpenter",
    location: "Downtown Project Site",
    requiredWorkers: 5,
    hiredWorkers: 3,
    hourlyRate: 25,
    status: "open",
  },
  {
    id: 2,
    jobTitle: "General Laborer",
    location: "Westside Construction",
    requiredWorkers: 10,
    hiredWorkers: 8,
    hourlyRate: 18,
    status: "open",
  },
  {
    id: 3,
    jobTitle: "Heavy Equipment Operator",
    location: "Highway Expansion Project",
    requiredWorkers: 3,
    hiredWorkers: 3,
    hourlyRate: 30,
    status: "filled",
  },
];

const JobIcon = ({ jobTitle }) => {
  if (jobTitle.toLowerCase().includes("carpenter"))
    return <Hammer className="w-6 h-6" />;
  if (jobTitle.toLowerCase().includes("operator"))
    return <Truck className="w-6 h-6" />;
  return <HardHat className="w-6 h-6" />;
};

export default function PostedJob() {
  const [jobCards, setJobCards] = useState(initialJobCards);

  const handleStatusChange = (id, newStatus) => {
    setJobCards((cards) =>
      cards.map((card) =>
        card.id === id ? { ...card, status: newStatus } : card
      )
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Construction Job Postings
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobCards.map((job) => (
          <Card
            key={job.id}
            className="flex flex-col overflow-hidden border-2 border-primary"
          >
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="flex justify-between items-center">
                <span className="text-2xl font-bold flex items-center gap-2">
                  <JobIcon jobTitle={job.jobTitle} />
                  {job.jobTitle}
                </span>
              </CardTitle>
              <Badge
                variant={
                  job.status === "open"
                    ? "secondary"
                    : job.status === "completed"
                    ? "success"
                    : "default"
                }
                className="mt-2"
              >
                {job.status === "open" ? (
                  <Clock className="w-4 h-4 mr-1" />
                ) : job.status === "completed" ? (
                  <CheckCircle className="w-4 h-4 mr-1" />
                ) : (
                  <XCircle className="w-4 h-4 mr-1" />
                )}
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </Badge>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between pt-4">
              <div>
                <p className="text-muted-foreground mb-2">{job.location}</p>
                <p className="font-semibold mb-4">
                  ${job.hourlyRate.toFixed(2)}/hour
                </p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Workers Hired:
                  </span>
                  <span className="text-lg font-medium">
                    {job.hiredWorkers} / {job.requiredWorkers}
                  </span>
                </div>
                <div className="bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-500 ease-in-out"
                    style={{
                      width: `${
                        (job.hiredWorkers / job.requiredWorkers) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between mt-4 gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleStatusChange(job.id, "completed")}
                  disabled={job.status !== "open" && job.status !== "filled"}
                >
                  Mark Complete
                </Button>
                <Button
                  variant={job.status === "open" ? "default" : "secondary"}
                  className="flex-1"
                  onClick={() =>
                    handleStatusChange(
                      job.id,
                      job.status === "open" ? "filled" : "open"
                    )
                  }
                  disabled={job.status === "completed"}
                >
                  {job.status === "open" ? "Mark Filled" : "Reopen"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
