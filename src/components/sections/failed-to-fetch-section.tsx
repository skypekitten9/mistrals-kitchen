import "./section.css";
import "../text.css";
import { Markdown } from "../markdown/markdown";
import type { HTMLProps } from "react";

type TFailedToFetchSection = {
} & HTMLProps<HTMLDivElement>;

const markdown = `Unable to fetch recipe at this time. Seems like the chef is out of ingredients (tokens), here is a backup recipe in the meantime: 

### Quick Tomato & Basil Offline Pasta

**Ingredients**
- 200g spaghetti
- 2 tbsp olive oil
- 2 garlic cloves, sliced
- 400g canned diced tomatoes
- Handful fresh basil leaves
- Salt & pepper, to taste
- Grated Parmesan (optional)

**Steps**
1. Cook the spaghetti according to package instructions; reserve 1/2 cup of the pasta water.
2. Heat the olive oil in a pan over medium heat and sauté the garlic until fragrant (about 30 seconds).
3. Add the diced tomatoes and simmer for 5–7 minutes to warm through.
4. Toss the cooked spaghetti into the sauce, adding a splash of reserved pasta water if needed to loosen the sauce.
5. Stir in the basil, season with salt and pepper, and serve topped with grated Parmesan if you like.

Enjoy this simple, reliable meal while the chef restocks!
`;

export function FailedToFetchSection({ ...rest }: TFailedToFetchSection) {
  return (
    <section className="main-section" aria-live="polite" {...rest}>
      <div className="text-container">
        <h2 className="text-title">Suggested recipe:</h2>
        <Markdown markdown={markdown} />
      </div>
    </section>
  );
}

export function RecipeSectionSkeletonLoader() {
  return <div className="skeleton-loader" />;
}
