import { JobCard } from "@/components/JobCard";



// Mock data for job offerings
const jobOfferings = [
  {
    id: 1,
    title: "Construction Laborer",
    startDate: new Date("2023-07-01"),
    endDate: new Date("2024-06-30"),
  },
  {
    id: 2,
    title: "Electrician - Construction",
    startDate: new Date("2023-08-15"),
    endDate: new Date("2024-08-14"),
  },
  {
    id: 3,
    title: "Heavy Equipment Operator",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-08-31"),
  },
  {
    id: 4,
    title: "Construction Foreman",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-09-30"),
  },
  {
    id: 5,
    title: "Carpenter - Construction",
    startDate: new Date("2023-11-01"),
    endDate: new Date("2024-10-31"),
  },
  {
    id: 6,
    title: "Construction Labor Helper",
    startDate: new Date("2023-12-01"),
    endDate: new Date("2024-11-30"),
  },
];


export default function EmployerDashboard() {
  return (
    <div className="container mx-auto px-14 mt-4">
      <h1 className="text-3xl font-bold mb-6">Job Offerings Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobOfferings.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            startDate={job.startDate}
            endDate={job.endDate}
            onViewMore={() => console.log(`View more clicked for ${job.title}`)}
          />
        ))}
      </div>
    </div>
  );
}
