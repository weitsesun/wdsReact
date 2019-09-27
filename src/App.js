import React, { useState } from 'react';
import Counter from './Counter'
import CounterHook from './CounterHook';

export const ThemeContext = React.createContext(); // provider & consumer

function App() {
  const [theme, setTheme] = useState('green');
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme}}>
      {console.log('App is rendered')}
      <Counter initialCount={0}/>
      <CounterHook initialCount={0} />
      <button onClick={() => setTheme(prevTheme => 
        prevTheme === 'red' ? 'blue' : 'red'
        )}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
