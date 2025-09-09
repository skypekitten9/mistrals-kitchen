import { useState } from "react";
import "./main.css";
import {
  IngredientSection,
  type TOnGetRecipe,
} from "../sections/ingridient-section";
import {
  RecipeSection,
  RecipeSectionSkeletonLoader,
} from "../sections/recipe-section";
import { getRecipeFromAi } from "../../api";

export function Main() {
  const [recipe, setRecipe] = useState<string | undefined>(undefined);
  const [recipeLoading, setRecipeLoading] = useState(false);
  const handleOnGetRecipie: TOnGetRecipe = (ingridients) => {
    setRecipeLoading(true);
    getRecipeFromAi(ingridients).then((recipe) => {
      setRecipe(recipe);
      setRecipeLoading(false);
    });
  };

  return (
    <main>
      <IngredientSection onGetRecipe={handleOnGetRecipie} />
      {recipe && <RecipeSection recipe={recipe} />}
      {recipeLoading && <RecipeSectionSkeletonLoader />}
    </main>
  );
}
