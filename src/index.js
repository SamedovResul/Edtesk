import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleReactLightbox from 'simple-react-lightbox'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>
);
