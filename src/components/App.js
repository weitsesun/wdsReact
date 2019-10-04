import React, { useState } from 'react';
import RecipeList from './RecipeList'
import '../css/App.css'
import uuidv4 from 'uuid/v4'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instruction: 'Ins',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs'}
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

  return (
    <RecipeList 
      recipes={recipes} 
      handleRecipeAdd={handleRecipeAdd}/> 
  )
  
}



const sampleRecipes = [
  {
    id: 1,
    name: 'Raw Chicken',
    servings: 3,
    cookTime: '1:45',
    instruction: '1. buy a chicken\n2. Wash the chicken\n3. Eat the chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '1 Pounds',
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs',
      }
    ]
  },
  {
    id: 2,
    name: 'Raw Pork',
    servings: 3,
    cookTime: '1:45',
    instruction: '1. buy a Pork\n2. Wash the Pork\n3. Eat the Pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'Cheese',
        amount: '1 Pounds',
      }
    ]
  }
]

export default App;
