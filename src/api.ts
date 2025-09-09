import { InferenceClient } from "@huggingface/inference";

const maxTokens = import.meta.env.VITE_API_KEY;
const AI_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const agent = new InferenceClient(maxTokens);

export async function getRecipeFromAi(ingredients: string[]) {
  const ingredientsString: string = ingredients.join(", ");
  try {
    const response = await agent.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: AI_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make, and make sure your response starts with "Based on the ingredients you".`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
