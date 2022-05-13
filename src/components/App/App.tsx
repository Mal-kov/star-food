import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import './App.css';
import { dataIngredients } from '../../utils/data';


const App = () => {

  return (
    <div className="App App-container p-10">
      <AppHeader />


      <main>
        {/* <BurgerIngredients ingredients={dataIngredients} />
        <BurgerConstructor ingredientsConstructor={dataIngredients} /> */}
      </main>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );

}

export default App;
