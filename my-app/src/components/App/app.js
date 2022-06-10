// == Import
import React from 'react';
import { Route, Routes } from 'react-router-dom';


//Composants
import Home from '../../pages/Home';
import Addpost from '../../pages/AddPost';

// data, styles et utilitaires
//import logo from '../../media/logo.svg';
import '../../styles/bulma.min.css';
import '../../styles/index.scss';

// == Composant
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/ajouter-un-post" element={Addpost()} />
      </Routes>
    </div>
  );
}

// ==   Export
export default App;
//<Route path="*" element={NotFound()} />