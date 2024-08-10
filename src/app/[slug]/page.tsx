import { JobCard } from "@/components/JobCard";
import { JobCardSkeleton } from "@/components/JobCardSkeleton";
import { ScheduleMainHeader } from "@/components/ScheduleMainHeader";
import { SearchCategories } from "@/components/SearchCategories";
import { SearchInput } from "@/components/SearchInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { db } from "@/lib/prisma";
import axios from "axios";
import Image from "next/image";

export default async function RenderTenantPage({ params }: any) {

  let services = [];
  let categories = [];
  let isLoading = true;

  // Make the API call using axios
  try {
    const response = await axios.get(
      `http://localhost:3000/api/tenant/${params.slug}`
    );

    if (response.status === 200) {
      const tenantData = response.data;

      services = await db.jobs.findMany({});
      categories = await db.categories.findMany({});
      isLoading = false;

      return (
        <>
          <ScheduleMainHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center text-left p-5 mt-2 gap-2">
            <div>
              <Typography variant="h3">Olá, Faça seu Login!</Typography>
              <Typography variant="body1">Sexta-feira, 08 de agosto</Typography>
            </div>
            <div className="md:text-right">
              <SearchInput />
            </div>
            <div className="flex flex-col gap-4">
              <SearchCategories categories={categories} />
              <div className="flex flex-col gap-4 ">
                <Typography variant="h4" className="text-slate-500">
                  Agendamentos:
                </Typography>
                <Card className="w-98 h-[111px] gap-2 p-4 flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <Badge className="bg-green-100 text-green-600">
                      Confirmado
                    </Badge>
                    <Typography
                      variant="body1"
                      className="text-black font-semibold"
                    >
                      Corte de Cabelo
                    </Typography>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback>VB</AvatarFallback>
                      </Avatar>
                      <Typography variant="caption" className="text-slate-500">
                        Vintage Barber
                      </Typography>
                    </div>
                  </div>

                  <div className="flex flex-col items-center border-l pl-4 gap-2">
                    <Typography variant="caption" className="text-slate-500">
                      Fevereiro
                    </Typography>
                    <Typography variant="h4" className="text-black">
                      06
                    </Typography>
                    <Typography variant="caption" className="text-slate-500">
                      09:45
                    </Typography>
                  </div>
                </Card>
              </div>
            </div>
          </div>
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
              services.map((service) => (
                <JobCard key={service.id} service={service} />
              ))
            )}
            </div>
            </div>
        </>
      );
    } else {
      console.error("API request failed:", response);
      return <div>Error fetching tenant data!</div>;
    }
  } catch (error) {
    console.error("API request error:", error);
    return <div>Error fetching tenant data!</div>;
  }
}
