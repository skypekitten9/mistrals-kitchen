import "./section.css";
import "../text.css";
import { Markdown } from "../markdown/markdown";
import type { HTMLProps } from "react";

type TRecipeSection = {
  recipe: string;
} & HTMLProps<HTMLDivElement>;

export function RecipeSection({ recipe, ...rest }: TRecipeSection) {
  return (
    <section className="main-section" aria-live="polite" {...rest}>
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
