import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
// Should return an array of all recipes
// Read the file
// Parse the read file (convert from JSON)
// Return recipes
export async function getRecipes() {
  const recipeJSON = await fs.readFile(fileName);
  const recipes = JSON.parse(recipeJSON);
  return recipes;
}

// GET A RECIPE BY ID
// Should return the particular recipe we are looking for
// Read the file
// Parse the read file (convert from JSON)
// Loop through array and find ID
// Once ID is found, return recipe
export async function getRecipeByID(id) {
  const recipeJSON = await fs.readFile(fileName);
  const recipes = JSON.parse(recipeJSON);

  let recipe = null;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipe = recipes[i];
      break;
    }
    return recipe;
  }
}

// CREATE A RECIPE
// Should add a recipe to the collection and return the new recipe
// Read and parse recipes JSON
// Create new recipe
// Push to the end of the array
// Write to file
// Return new Recipe
export async function createRecipe(newRecipe) {
  const recipeJSON = await fs.readFile(fileName);
  const recipes = JSON.parse(recipeJSON);

  const newRecipe = {
    id: uuidv4(),
    ...newRecipe,
  };
  recipes.push(newRecipe);
  await fs.writeFile(fileName, JSON.stringify(recipes));

  return newRecipe;
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
