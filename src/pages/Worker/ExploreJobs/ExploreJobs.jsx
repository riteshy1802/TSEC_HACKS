import { JobCard } from "./JobCard"
import { SearchBar } from "./SearchBar"
import { Filters } from "./Filters"
import { jobs } from './job-data'
export default function ExploreJobs() {

  return (
    <>
      <div className="container px-10 py-5 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Explore Jobs</h1>
        <div className="space-y-6">
          <SearchBar />
          <Filters />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  )
}

