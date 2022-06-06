import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Rules from './components/Rules';
import MyContextProvider from './context/MyContext';

function App() {
  return (
    
      <div className="App">
          
          <MyContextProvider>
            <Header/>
            <Main />
          </MyContextProvider>
          <Rules />
          
      </div>
  );
}

export default App;
