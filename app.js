import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

// GET Method to respond with all recipes
app.get("/api/recipes", async function (req, res) {
  // If all recipes is chosen by front end, return the following response with an JSON object {success: true, payload: all recipes }. Use getRecipes CRUD function previously defined.
  res.status(200).send({ success: true, payload: await getRecipes() });
});

// GET Method to respond with a particular recipe, with selected ID
app.get("/api/recipes/:id", async function (req, res) {
  // We are going to use getRecipeByID function
  // Respond with the recipe which matches the id parameter on path
  // Create variable to call helper function with correct argument/input (the id of the parameter)
  const findRecipe = await getRecipeByID(req.params.id);
  //
  res.status(200).send({ success: true, payload: findRecipe });
});

// POST Method to create a new recipe
app.post("/api/recipes/", async function (req, res) {
  //create recipes
  const newRecipe = req.body;
  const addedRecipe = await createRecipe(newRecipe);

  res.status(200).send({ success: true, payload: addedRecipe });
});
//PATCH method to update recipe by ID
app.patch("/api/recipes/:id", async function (req, res) {
  const updateRecipe = await updateRecipeByID(req.params.id, req.body);
  res.status(200).send({ success: true, payload: updateRecipe });
});

//DELETE method to delete a recipe by ID
app.delete("/api/recipes/:id", async function (req, res) {
  const removeRecipe = await deleteRecipeByID(req.params.id);
  res.send(removeRecipe);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
