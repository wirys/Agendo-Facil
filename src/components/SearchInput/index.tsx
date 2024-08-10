import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function SearchInput() {
  return (
    <div className="flex p-2 gap-2">
      <Input placeholder="Buscar" />
      <Button size={"icon"}>
        <Search />
      </Button>
    </div>
  );
}
