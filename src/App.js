import React, { useContext } from 'react';
import { SideBar } from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/app.css';
import {ThemeContextProvider} from './context/ThemeContext';

export default function App() {
  return (
    <div id="wrapper">
    <BrowserRouter>
      <SideBar />
        <ThemeContextProvider>

          <ContentWrapper />

        </ThemeContextProvider>
        </BrowserRouter>
    </div>
  );
}

