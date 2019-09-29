import React from 'react';
import RecipeList from './RecipeList'

function App() {
  return (
    <RecipeList recipes={sampleRecipes} /> 
  )

  
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Raw Chicken',
    servings: 3,
    cookTime: '1:45',
    instruction: '1. buy a chicken\n2. Wash the chicken\n3. Eat the chicken',
  },
  {
    id: 2,
    name: 'Raw Pork',
    servings: 3,
    cookTime: '1:45',
    instruction: '1. buy a Pork\n2. Wash the Pork\n3. Eat the Pork',
  }
]

export default App;
