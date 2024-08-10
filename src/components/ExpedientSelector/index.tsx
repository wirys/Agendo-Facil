import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ExpedientSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Horario de Expediente </SelectLabel>
          <SelectItem value="apple">Segunda</SelectItem>
          <SelectItem value="banana">Terça</SelectItem>
          <SelectItem value="blueberry">Quarta</SelectItem>
          <SelectItem value="grapes">Quinta</SelectItem>
          <SelectItem value="pineapple">
            <strong>Sexta</strong> - 00:00 as 18:00
          </SelectItem>
          <SelectItem value="pineapple">Sabado</SelectItem>
          <SelectItem value="pineapple">Domingo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
