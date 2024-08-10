import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

export default function Schedule() {
  return (
    <>
      <Card className="flex flex-col gap-2 w-full">
        <CardTitle className="row-auto mt-2 flex  p-3">
          <User className="text-sky-400" />
          <span className="text-normal">Dados pessoais</span>
        </CardTitle>
        <CardContent className="grid md:grid-cols-2 sm:grid-cols-1 gap-1.5">
          <div className="flex flex-col items-start justify-start gap-1.5">
            <Label htmlFor="name">Nome:</Label>
            <Input type="text" id="name" placeholder="Nome" />
          </div>
          <div className="flex flex-col items-start justify-start gap-1.5">
            <Label htmlFor="phone">Telefone:</Label>
            <Input type="tel" id="phone" placeholder="Telefone" />
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
