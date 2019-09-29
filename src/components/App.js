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
