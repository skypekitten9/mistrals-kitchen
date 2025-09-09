import { useState } from "react";
import "./main.css";
import {
  IngredientSection,
  type TOnGetRecipe,
} from "../sections/ingridient-section";
import { RecipeSection } from "../sections/recipe-section";
import { getRecipeFromAi } from "../../api";

export function Main() {
  const [recipe, setRecipe] = useState<string | undefined>(undefined);
  const handleOnGetRecipie: TOnGetRecipe = (ingridients) => {
    getRecipeFromAi(ingridients).then((recipe) => {
      setRecipe(recipe);
      console.log("recipe", recipe);
    });
  };

  return (
    <main>
      <IngredientSection onGetRecipe={handleOnGetRecipie} />
      {recipe && <RecipeSection recipe={recipe} />}
    </main>
  );
}
