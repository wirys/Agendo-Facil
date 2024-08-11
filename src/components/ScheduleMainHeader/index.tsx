import { TenantLogo } from "@/components/TenantLogo";
import imgBackground from "@/app/assets/background.png";
import { TenantHeader } from "../TenantHeader";
export function ScheduleMainHeader() {
  return (
    <>
      <div className="relative w-full h-[270px] flex flex-col items-center justify-center text-center gap-3">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: `url(${imgBackground.src})`,
            filter: "blur(1.3px)",
          }}
        ></div>

        <TenantLogo />
        <TenantHeader />
      </div>
    </>
  );
}
