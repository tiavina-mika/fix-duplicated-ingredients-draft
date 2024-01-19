import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { uniqBy } from "lodash";

import { ingredientsNotWorking } from "./data/ingredients-not-working";
import { ingredients } from "./data/ingredients";

const recipe = "Création PSE - Recette A";

const filteredNotWorkingIngredients = ingredientsNotWorking.filter(
  (ingredient) => {
    return ingredient.recipe === recipe;
  }
);
const filteredWorkingIngredients = ingredients.filter((ingredient) => {
  return ingredient.recipe === recipe;
});

const uniqNotWorking = uniqBy(filteredNotWorkingIngredients, (ingredient) => {
  return `${ingredient.index}${ingredient.grossWeight}${ingredient.volume}${ingredient.stepDate}`;
});
console.log(
  "filteredNotWorkingIngredients",
  uniqNotWorking.map((ingredient) => ingredient.totalWeight)
);
console.log(
  "filteredWorkingIngredients",
  filteredWorkingIngredients.map((ingredient) => ingredient.totalWeight)
);

// Création PSE - Recette B ok : [62.5, 99, 24.75, 0.25, 0.25, 50, 17.765]
// Changement statuts PSE - Recette C: [476.1904761904762, 142.8571428571429, 45]
// Création PSE - Recette A not ok (duplicated)

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
