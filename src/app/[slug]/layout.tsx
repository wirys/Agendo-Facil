"use client"
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
export default function TenantLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
  return (<>
    <div className="flex flex-col stick">
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>

      </div>
      </>
    )
  }