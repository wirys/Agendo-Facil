import { Jobs } from "@prisma/client";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";



type JobCardProps = {
  service: Jobs;
};

export function JobCard({ service }: JobCardProps) {
  return (
    <Card className="flex p-4 items-center gap-4" key={service.id}>
      <div className="w-1/4">
        <img
          src={service.jobImageURL || ""}
          alt="Serviço"
          width={80}
          height={80}
          className="rounded-md w-20 h-20"
        />
      </div>
      <div className="w-2/4 gap-2">
        <Typography variant="h1" className="text-sm">
          {service.name}
        </Typography>
        <Typography variant="caption" className="text-slate-500">
          {service.description}
        </Typography>
        <Typography variant="body2" className="text-purple-600 mt-2 font-bold">
          R$ {service.price.toFixed(2)}
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
