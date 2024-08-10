"use client"
import { useState } from "react";
import { Badge } from "../ui/badge";
import { CheckCircle, CheckIcon } from "lucide-react";

interface SearchCategoriesProps {
  categories: string[];
}

export function SearchCategories({ categories }: any) {
  // Estado para gerenciar os filtros selecionados
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

  // Função para alternar o estado de seleção
  const handleToggleCategory = (category: string) => {
    setSelectedCategories(prevState => {
      const updatedState = new Set(prevState);
      if (updatedState.has(category)) {
        updatedState.delete(category);
      } else {
        updatedState.add(category);
      }
      return updatedState;
    });
  };

  return (
    <div className="gap-2 flex flex-wrap">
      {categories.map((category) => (
        <Badge
          key={category.id}
          variant={selectedCategories.has(category) ? "default" : "outline"}
          onClick={() => handleToggleCategory(category)}
          className="cursor-pointer gap-1"
          >
        {selectedCategories.has(category) ? <CheckIcon size={12} /> : null}
          {category.name}
        </Badge>
      ))}
    </div>
  );
}
