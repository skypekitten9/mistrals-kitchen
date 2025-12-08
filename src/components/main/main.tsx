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

const RecipeState = {
  None: 0,
  Loading: 1,
  Error: 2,
  Loaded: 3,
} as const;
type RecipeState = typeof RecipeState[keyof typeof RecipeState];

export function Main() {
  const [recipeState, setRecipeState] = useState<RecipeState>(RecipeState.None);
  const [recipe, setRecipe] = useState<string | undefined>(undefined);
  const recipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recipe && recipeRef.current) {
      recipeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  const handleOnGetRecipie: TOnGetRecipe = (ingridients) => {
    setRecipeState(RecipeState.Loading);
    getRecipeFromAi(ingridients).then((recipe) => {
      setRecipe(recipe);
      setRecipeState(()=>recipe ? RecipeState.Loaded : RecipeState.Error);
    });
  };

  return (
    <main>
      <IngredientSection onGetRecipe={handleOnGetRecipie} />
      {(recipe && recipeState === RecipeState.Loaded) && <RecipeSection ref={recipeRef} recipe={recipe} />}
      {recipeState === RecipeState.Loading && <RecipeSectionSkeletonLoader />}
      {recipeState === RecipeState.Error && (
        <h3>Seems like the chef is on vacation, try again later.</h3>
      )}
    </main>
  );
}
