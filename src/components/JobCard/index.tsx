import { Jobs } from "@prisma/client";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";



type JobCardProps = {
  job: Jobs;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="flex p-4 items-center gap-4" key={job.id}>
      <div className="w-1/4">
        <img
          src={job?.jobImageURL || ""}
          alt="Serviço"
          width={80}
          height={80}
          className="rounded-md w-20 h-20"
        />
      </div>
      <div className="w-2/4 gap-2">
        <Typography variant="h1" className="text-sm">
          {job.name}
        </Typography>
        <Typography variant="caption" className="text-slate-500">
          {job.description}
        </Typography>
        <Typography variant="body2" className="text-purple-600 mt-2 font-bold">
          R$ {job.price.toString()}
        </Typography>
      </div>
      <div className="w-1/4">
        <Button size="sm" className="w-full">
          Reservar
        </Button>
      </div>
    </Card>
  );
}
