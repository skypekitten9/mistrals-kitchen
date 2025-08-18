import "./ingrident-form.css";

type TIngredientForm = {
  onIngredientSubmited: (ingredient: string) => void;
};

export function IngredientForm({ onIngredientSubmited }: TIngredientForm) {
  const INPUT_INGREDIENT_NAME = "ingridient";
  const submitAction = (formData: FormData) => {
    const ingredient = formData.get(INPUT_INGREDIENT_NAME);
    if (ingredient) {
      onIngredientSubmited(ingredient.toString());
    }
  };

  return (
    <form action={submitAction} className="ingridient-root">
      <input
        type="text"
        className="ingridient-input"
        placeholder="e.g. oregano"
        name={INPUT_INGREDIENT_NAME}
      />
      <button className="submit-ingridient-button">Add ingredient</button>
    </form>
  );
}
