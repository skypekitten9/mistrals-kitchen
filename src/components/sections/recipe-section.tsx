import "./section.css";

type TRecipeSection = {
  recipe: string;
};

export function RecipeSection({ recipe }: TRecipeSection) {
  return <section className="main-section">{recipe}</section>;
}
