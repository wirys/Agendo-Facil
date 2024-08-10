import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ScheduleLayout({
    children,
}: {
    children: React.ReactNode
    }) { 
    
    return (<> <div className=" flex-col flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
          <div className="ml-2 flex items-center justify-center text-sm font-semibold gap-6">
            <Button size={"icon"} variant={"outline"}>
              <ArrowLeft/>
            </Button>
             Novo Agendamento
          </div>
          </div>
          </div>
    </div>
    {children}
    </>)
    
}