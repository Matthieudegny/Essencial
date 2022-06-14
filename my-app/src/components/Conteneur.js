// == Import
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/app.scss'


// data, styles et utilitaires
//import logo from '../../media/logo.svg';

import '../styles/index.scss';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Caroussel from './Caroussel';


// == Composant
function Conteneur() {
  
  return (
    <div className="Conteneur">

      <header className='App-header'>

        <Navigation/>

      </header>

      <main className='App-main'>

        <aside className='App-main-aside'>
          <Sidebar />
        </aside>

        <div className='App-main-page'>

          <div className="App-main-page-caroussel">
            <Caroussel />
          </div>

          <div className='App-main-page-wall'>
    
          </div>
         
        </div>

      </main>

      <footer className='App-main-footer'>
        <Footer />
      </footer>

     
    </div>
  );
}

// ==   Export
export default Conteneur;
//<Route path="*" element={NotFound()} />