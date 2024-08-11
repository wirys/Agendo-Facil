import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { CheckIcon } from "lucide-react";
import { Categories } from "@prisma/client";
import { getCategoriesService } from "@/app/services/categories/getCategoriesService";
import { CategorySkeleton } from "@/components/CategorySkeleton";

export function SearchCategories() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Inicializa como true para mostrar o esqueleto inicialmente

  useEffect(() => {
    const fetch = async () => {
      try {
        const listCategories = await getCategoriesService();
        setCategories(listCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  // Estado para gerenciar os filtros selecionados
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );

  // Função para alternar o estado de seleção
  const handleToggleCategory = (category: string) => {
    setSelectedCategories((prevState) => {
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
      {isLoading ? (
        <>
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
        </>
      ) : (
        categories.map((category) => (
          <Badge
            key={category.id}
            variant={
              selectedCategories.has(category.name) ? "default" : "outline"
            }
            onClick={() => handleToggleCategory(category.name)}
            className="cursor-pointer gap-1"
          >
            {selectedCategories.has(category.name) ? (
              <CheckIcon size={12} />
            ) : null}
            {category.name}
          </Badge>
        ))
      )}
    </div>
  );
}
