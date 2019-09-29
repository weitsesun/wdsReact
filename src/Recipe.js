import React from 'react'

export default function Recipe(props) {
  const { name, 
          instruction,
          servings,
          cookTime 
        } = props;
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <div>Instruction:</div>
        <div>{instruction}</div>
      </div>
    </div>
  )
}
