"use client"
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// Definindo o schema de validação com Zod
const searchSchema = z.object({
  query: z.string(),
});

// Definindo o tipo dos dados do formulário com base no schema
type SearchFormData = z.infer<typeof searchSchema>;

type SearchInputProps = {
  onSearch: (query: string) => void;
};

export function SearchInput({ onSearch }: SearchInputProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    onSearch(data.query);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex p-2 gap-2">
      <Input placeholder="Buscar" {...register("query")} />
      <Button type="submit" size={"icon"}>
        <Search />
      </Button>
    </form>
  );
}
