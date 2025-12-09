import { useState } from "react";
import { Banner } from "../banner/banner";
import { IngredientForm } from "../forms/ingredient-form";
import { List } from "../list/list";
import "./section.css";

const MIN_REQUIRED_INGRIDIENTS: number = 4;

export type TOnGetRecipe = (ingridients: string[]) => void;

type TIngridientForm = {
  onGetRecipe: TOnGetRecipe;
} & React.HTMLAttributes<HTMLDivElement>;

export function IngredientSection({ onGetRecipe }: TIngridientForm) {
  const [ingredientList, setIngredientList] = useState<string[]>([]);

  const shouldRenderIgredientList = ingredientList.length > 0;
  const shouldRenderGetRecipeBanner =
    ingredientList.length >= MIN_REQUIRED_INGRIDIENTS;

  const handleOnIngredientSubmited = (ingredient: string) => {
    const lowercase = ingredient.toLowerCase();
    const firstCapitalized =
      lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
    setIngredientList((oldIngredientList) => [
      ...oldIngredientList,
      firstCapitalized,
    ]);
  };

  return (
    <section className="main-section">
      <Banner
        title={"Welcome to the kitchen"}
        description={"Mistral helps you cook delicious meals with what you have at home! Add some ingredients to get started (4 minimum)."}
      >
      </Banner>
      <IngredientForm onIngredientSubmited={handleOnIngredientSubmited} />
      {shouldRenderIgredientList && (
        <>
          <List
            title="Ingridents on hand:"
            items={ingredientList}
            aria-label=""
            onItemDeleted={function (item: string): void {
              setIngredientList((oldIngredientList) =>
                oldIngredientList.filter((ingrediant) => ingrediant !== item)
              );
            }}
          />
          {shouldRenderGetRecipeBanner && (
            <Banner
              title={"Ready for a recipe?"}
              description={"Generate a recipe from your list of ingredients."}
              className="transition"
            >
              <button
                className="get-recipe-button"
                onClick={() => onGetRecipe(ingredientList)}
              >
                Get a recipe
              </button>
            </Banner>
          )}
        </>
      )}
    </section>
  );
}
