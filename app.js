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

app.get("/api/recipes", async function (req, res) {
  // If random quote is not selected, invoke and return getQuotes function
  res.status(200).send({ success: true, payload: await getRecipes() });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
