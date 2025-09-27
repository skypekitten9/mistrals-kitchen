import { mistralFunction } from "./lib/appwrite";

const AI_CONTEXT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

export async function getRecipeFromAi(ingredients: string[]) {
  const prompt = `I have ${ingredients.join(", ")}. Please give me a recipe you'd recommend I make, and make sure your response starts with "Based on the ingredients you".`
  try {
    const response = await mistralFunction({prompt, context: AI_CONTEXT})
    const body = JSON.parse(response.responseBody);
    return body.completion.choices[0].message.content;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
