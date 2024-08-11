import { useEffect, useState } from "react";
import { JobCard } from "../JobCard";
import { JobCardSkeleton } from "../JobCardSkeleton";
import { Typography } from "../ui/typography";
import { getJobsService } from "@/app/services/jobs/getJobsService";
import { Jobs } from "@prisma/client";

export function JobList({ searchParams }: any) {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      let listJobs: Jobs[] = [];
      setIsLoading(true);
      try {
        if (searchParams === "" || searchParams === null || searchParams === undefined) {
          listJobs = await getJobsService();
        } else {
          listJobs = await getJobsService(searchParams);
        }
        setJobs(listJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <Typography variant="h4" className="text-slate-500">
        Serviços:
      </Typography>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-4 ">
        {isLoading ? (
          <>
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
          </>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
}
