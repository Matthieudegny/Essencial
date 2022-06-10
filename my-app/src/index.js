// == Import : npm
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
// Composants
import App from './components/App/app';

// data, styles et utilitaires


// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootComponent =
  <BrowserRouter>
    <App />
  </BrowserRouter>;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const container = document.getElementById('app');
// 3. On donne container a create root en le stockant dans la const root 
const root = createRoot(container);
// 4. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootComponent);
