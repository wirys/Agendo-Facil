"use client";
import { useState } from "react";
import { JobList } from "@/components/JobsList";
import { ScheduleMainHeader } from "@/components/ScheduleMainHeader";
import { SearchCategories } from "@/components/SearchCategories";
import { SearchInput } from "@/components/SearchInput";
import { Avatar, AvatarFallback} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";



export default function RenderTenantPage({ params }: any) {
const [query, setQuery] = useState(""); 
const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };
      return (
        <>
          <ScheduleMainHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center text-left p-5 mt-2 gap-2">
            <div>
              <Typography variant="h3">Olá, Faça seu Login!</Typography>
              <Typography variant="body1">Sexta-feira, 08 de agosto</Typography>
            </div>
            <div className="md:text-right">
              <SearchInput onSearch={handleSearch}/>
            </div>
            <div className="flex flex-col gap-4">
              <SearchCategories />
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
          <JobList searchParams={query} />
        </>
      );
  
}
