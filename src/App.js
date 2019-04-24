import React from 'react';
import Home from './main/home/Home'
import Toolbar from './components/toolbar/Toolbar'
import Card from './components/card/Card'

function App() {
  // render() {
    return (
      <div>
        <Toolbar/>
          <Card/>
        {/*<Home/>*/}
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  // }
}

export default App;
