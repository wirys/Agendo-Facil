import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { CheckIcon } from "lucide-react";
import { Categories } from "@prisma/client";
import { getCategoriesService } from "@/app/services/categories/getCategoriesService";
import { CategorySkeleton } from "@/components/CategorySkeleton";

type SearchCategoriesProps = {
  onSelectCategories: (selectedIds: Set<number>) => void;
};

export function SearchCategories({ onSelectCategories }: SearchCategoriesProps) {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const [selectedCategories, setSelectedCategories] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    onSelectCategories(selectedCategories);
  }, [selectedCategories, onSelectCategories]);

  const handleToggleCategory = (categoryId: number) => {
    setSelectedCategories((prevState) => {
      const updatedState = new Set(prevState);
      if (updatedState.has(categoryId)) {
        updatedState.delete(categoryId);
      } else {
        updatedState.add(categoryId);
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
              selectedCategories.has(category.id) ? "default" : "outline"
            }
            onClick={() => handleToggleCategory(category.id)}
            className="cursor-pointer gap-1"
          >
            {selectedCategories.has(category.id) ? (
              <CheckIcon size={12} />
            ) : null}
            {category.name}
          </Badge>
        ))
      )}
    </div>
  );
}
