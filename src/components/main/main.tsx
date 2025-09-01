import { useState } from "react";
import { IngredientForm } from "../forms/ingredient-form";
import { List } from "../list/list";
import "./main.css";
import { Banner } from "../banner/banner";

const MIN_REQUIRED_INGRIDIENTS: number = 4;

export function Main() {
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
    <main>
      <section className="main-section">
        <IngredientForm onIngredientSubmited={handleOnIngredientSubmited} />
        {shouldRenderIgredientList && (
          <>
            <List
              title="Ingridents on hand:"
              items={ingredientList}
              aria-label=""
            />
            {shouldRenderGetRecipeBanner && (
              <Banner
                title={"Ready for a recipe?"}
                description={"Generate a recipe from your list of ingredients."}
              >
                <button className="get-recipe-button">Get a recipe</button>
              </Banner>
            )}
          </>
        )}
      </section>
    </main>
  );
}
