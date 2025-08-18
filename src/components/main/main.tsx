import { useState } from "react";
import { IngredientForm } from "../forms/ingredient-form";
import { List } from "../list/list";
import "./main.css";

export function Main() {
  const [ingredientList, setIngredientList] = useState<string[]>([]);
  const shouldRenderIgredientList = ingredientList.length > 0;
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
      <div className="main-content">
        <IngredientForm onIngredientSubmited={handleOnIngredientSubmited} />
        {shouldRenderIgredientList && (
          <List title="Ingridents on hand:" items={ingredientList} />
        )}
      </div>
    </main>
  );
}
