import "./section.css";
import "../text.css";
import { Markdown } from "../markdown/markdown";

type TRecipeSection = {
  recipe: string;
};

export function RecipeSection({ recipe }: TRecipeSection) {
  return (
    <section className="main-section" aria-live="polite">
      <div className="text-container">
        <h2 className="text-title">Suggested recipe:</h2>
        <Markdown markdown={recipe} />
      </div>
    </section>
  );
}

export function RecipeSectionSkeletonLoader() {
  return <div className="skeleton-loader" />;
}
