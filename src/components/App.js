import React from 'react'
// import React, { useState, useEffect } from 'react';
// import RecipeList from './RecipeList'
import '../css/App.css'
// import uuidv4 from 'uuid/v4'
// // import RecipeEdit from './RecipeEdit';

// export const RecipeContext = React.createContext();
// const LOCAL_STORAGE_EKY = 'cookingWithReact.recipes'

function App() {
  // const [recipes, setRecipes] = useState(sampleRecipes);
  // const [selectedRecipeId, setSelectedRecipeId] = useState();

  // // const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  // useEffect(() => {
  //   const recipeJSON = localStorage.getItem(LOCAL_STORAGE_EKY);
  //   if (recipeJSON !== null) setRecipes(JSON.parse(recipeJSON));
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_EKY, JSON.stringify(recipes))
  // }, [recipes])

  // const recipeContextValue = {
  //   handleRecipeAdd,
  //   handleRecipeDelete,
  //   handleRecipeSelect,
  //   handleRecipeChange,
  // }

  // function handleRecipeAdd() {
  //   const newRecipe = {
  //     id: uuidv4(),
  //     name: '',
  //     servings: 1,
  //     cookTime: '',
  //     instruction: '',
  //     ingredients: [
  //       { id: uuidv4(), name: '', amount: '' }
  //     ]
  //   }
  //   setSelectedRecipeId(newRecipe.id);
  //   setRecipes([...recipes, newRecipe])
  // }

  // function handleRecipeDelete(id) {
  //   setRecipes(recipes.filter(recipe => recipe.id !== id))
  // }

  // function handleRecipeSelect(id) {
  //   setSelectedRecipeId(id);
  // }

  // function handleRecipeChange(id, recipe) {
  //   const newRecipe = [...recipes];
  //   const index = newRecipe.findIndex(r => r.id === id);
  //   newRecipe[index] = recipe;
  //   setRecipes(newRecipe);
  // }

  return (
    // <RecipeContext.Provider value={recipeContextValue}>
      <h1>孫海海你好</h1>
      /* <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />} */
    // </RecipeContext.Provider>
  )

}



// const sampleRecipes = [
//   {
//     id: 1,
//     name: 'Raw Chicken',
//     servings: 3,
//     cookTime: '1:45',
//     instruction: '1. buy a chicken\n2. Wash the chicken\n3. Eat the chicken',
//     ingredients: [
//       {
//         id: 1,
//         name: 'Chicken',
//         amount: '1 Pounds',
//       },
//       {
//         id: 2,
//         name: 'Salt',
//         amount: '1 Tbs',
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: 'Raw Pork',
//     servings: 3,
//     cookTime: '1:45',
//     instruction: '1. buy a Pork\n2. Wash the Pork\n3. Eat the Pork',
//     ingredients: [
//       {
//         id: 1,
//         name: 'Pork',
//         amount: '2 Pounds',
//       },
//       {
//         id: 2,
//         name: 'Cheese',
//         amount: '1 Pounds',
//       }
//     ]
//   }
// ]

export default App;
