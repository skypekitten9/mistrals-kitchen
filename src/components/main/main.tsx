import { useState } from "react";
import "./main.css";
import { IngredientSection } from "../sections/ingridient-section";
import { RecipeSection } from "../sections/recipe-section";

export function Main() {
  const [shouldShowRecipe, setShouldShowRecipe] = useState(false);
  const handleOnGetRecipie = () => {
    setShouldShowRecipe((oldValue) => !oldValue);
  };

  return (
    <main>
      <IngredientSection onGetRecipe={handleOnGetRecipie} />
      {shouldShowRecipe && <RecipeSection />}
    </main>
  );
}
