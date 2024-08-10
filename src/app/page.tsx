import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TenantLogo } from "@/components/TenantLogo";
import { Typography } from "@/components/ui/typography";
import { ScheduleMainHeader } from "@/components/ScheduleMainHeader";
export default function Home() {
  return (
    <main /*className="flex min-h-screen flex-col items-center justify-between p-24"*/
    >
      <div className="flex flex-col items-center justify-center gap-2 sticky text-center px-5 py-1">
       <ScheduleMainHeader/>
        <h3 className="text-2xl font-semibold text-emerald-500 ">
          Agendar com Profissional:
        </h3>
        <div className="gap-1 flex flex-col">
          <div className="text-left items-start justify-start">
            <h3 className="text-2xl font-semibold text-emerald-500 p-0">
              Agendar por Serviços:
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Avatar className="w-24 h-24">
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <span className="text-3xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>WIRYS</span>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>SERVIÇOS</AccordionTrigger>
            <AccordionContent className="grid gap-3">
              <Card className="">
                <span className="font-semibold text-lg">Massagem </span>
                <span className="font-semibold">R$ 30,00</span>
                <Button size={"sm"}>Reservar</Button>
              </Card>
              <Card className="">
                <span className="font-semibold text-lg">Massagem </span>
                <span className="font-semibold">R$ 30,00</span>
                <Button size={"sm"}>Reservar</Button>
              </Card>
              <Card className="">
                <span className="font-semibold text-lg">Massagem </span>
                <span className="font-semibold">R$ 30,00</span>
                <Button size={"sm"}>Reservar</Button>
              </Card>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
