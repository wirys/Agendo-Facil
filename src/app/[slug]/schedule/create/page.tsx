"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarCheck, User } from "lucide-react";
import React from "react";

export default function Create() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Card className="flex flex-col gap-2 w-full">
        <CardContent className="flex flex-col items-center justify-center gap-1.5">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
                  />
            <div className="flex items-center justify-center gap-1.5 mt-2">
           <Button>00:00</Button> <Button>00:00</Button> <Button>00:00</Button> <Button>00:00</Button> <Button>00:00</Button> <Button>00:00</Button> <Button>00:00</Button> <Button>00:00</Button> <Button>00:00</Button> <Button>00:00</Button> <Button>00:00</Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <CalendarCheck />
            <Label className="text-xl">
              Não há mais disponibilidade nesta data
            </Label>
            <span>Encontre o horário mais próximo da data desejada</span>
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col gap-2 w-full">
        <CardTitle className="row-auto mt-2 flex  p-3">
          <User className="text-sky-400" />
          <span className="text-normal">Escolha o profissional</span>
        </CardTitle>
        <CardContent className="grid md:grid-cols-6 sm:grid-cols-3 gap-1.5">
          <div className="flex flex-col items-center justify-start gap-1.5">
            <Avatar className="w-24 h-24 hover:border-spacing-1 hover:border-slate-600">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Label>Bruna Louise</Label>
          </div>
          <div className="flex flex-col items-center justify-start gap-1.5">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Label>Bruna Louise</Label>
          </div>
          <div className="flex flex-col items-center justify-start gap-1.5">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Label>Bruna Louise</Label>
          </div>
        </CardContent>
      </Card>
      <Card className="fixed bottom-0 w-full h-20 border-t-slate-400 flex items-center justify-center px-10">
        <Button className="w-full pr-10">Proximo</Button>
      </Card>
    </>
  );
}
