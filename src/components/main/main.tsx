import { useEffect, useRef, useState } from "react";
import "./main.css";
import {
  IngredientSection,
  type TOnGetRecipe,
} from "../sections/ingridient-section";
import {
  RecipeSection,
  RecipeSectionSkeletonLoader,
} from "../sections/recipe-section";
import { getRecipeFromAi } from "../../external";

export function Main() {
  const [recipe, setRecipe] = useState<string | undefined>(undefined);
  const [recipeLoading, setRecipeLoading] = useState(false);
  const [recipeError, setRecipeError] = useState(false);
  const recipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recipe && recipeRef.current) {
      recipeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  const handleOnGetRecipie: TOnGetRecipe = (ingridients) => {
    setRecipeLoading(true);
    getRecipeFromAi(ingridients).then((recipe) => {
      if (recipe) {
        setRecipeError(false);
      } else {
        setRecipeError(true);
      }
      setRecipe(recipe);
      setRecipeLoading(false);
    });
  };

  return (
    <main>
      <IngredientSection onGetRecipe={handleOnGetRecipie} />
      {recipe && <RecipeSection ref={recipeRef} recipe={recipe} />}
      {recipeLoading && <RecipeSectionSkeletonLoader />}
      {recipeError && (
        <h3>Seems like the chef is on vacation, try again later.</h3>
      )}
    </main>
  );
}
