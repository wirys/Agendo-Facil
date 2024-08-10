// import { Button } from "@/components/ui/button"
// import { ArrowLeft } from "lucide-react"

export default function TenantLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
  return (<>
      <div className="flex flex-col stick">
        {children}
      </div>
      </>
    )
  }