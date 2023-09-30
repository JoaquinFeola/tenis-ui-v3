import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { TenisApp } from './TenisApp';
import { BrowserRouter } from 'react-router-dom';
import { PurpleThemeProvider } from './app/themes/PurpleThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PurpleThemeProvider >
          <TenisApp />
        </PurpleThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

);
