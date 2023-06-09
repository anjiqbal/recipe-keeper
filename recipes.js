import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
// Should return an array of all recipes
// Read the file
// Parse the read file (convert from JSON)
// Return recipes
export async function getRecipes() {
  const recipesJSON = await fs.readFile(fileName);
  const recipes = JSON.parse(recipesJSON);
  return recipes;
}

// GET A RECIPE BY ID
// Should return the particular recipe we are looking for
// Read the file
// Parse the read file (convert from JSON)
// Loop through array and find ID
// Once ID is found, return recipe
export async function getRecipeByID(id) {
  const recipesJSON = await fs.readFile(fileName);
  const recipes = JSON.parse(recipesJSON);

  let recipe = null;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipe = recipes[i];
      break;
    }
  }
  return recipe;
}

// CREATE A RECIPE
// Should add a recipe to the collection and return the new recipe
// Read and parse recipes JSON
// Create new recipe
// Push to the end of the array
// Write to file
// Return new Recipe
export async function createRecipe(newRecipe) {
  //taking in a new recipe. Everything but the ID.
  const recipesJSON = await fs.readFile(fileName);
  const recipes = JSON.parse(recipesJSON); //turns back to Javascript to be able to edit.

  const newNewRecipe = {
    id: uuidv4(),
    ...newRecipe,
  };
  recipes.push(newNewRecipe);
  await fs.writeFile(fileName, JSON.stringify(recipes));

  return newNewRecipe;
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {
  const recipesJSON = await fs.readFile(fileName);
  const recipes = JSON.parse(recipesJSON);

  let recipe = null;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipe = recipes[i];
      recipes[i] = {
        ...recipes[i],
        ...updatedRecipe,
      };

      break;
    }
  }
  await fs.writeFile(fileName, JSON.stringify(recipes));
  return recipe;
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {
  const recipesJSON = await fs.readFile(fileName);
  const recipes = JSON.parse(recipesJSON);

  let recipeIndex = null;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipeIndex = i;
      break;
    }
  }

  if (recipeIndex !== null) {
    const deletedRecipe = recipes.splice(recipeIndex, 1);
    await fs.writeFile(fileName, JSON.stringify(recipes));
    return deletedRecipe[0];
  }

  return null;
}
