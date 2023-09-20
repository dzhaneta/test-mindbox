import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/normalize.css';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom/client';
// importing theme
import baseTheme from './styles/theme';
// importing global styles
import GlobalStyles from './styles/global';
import reportWebVitals from './reportWebVitals';
import TodoApp from './components/TodoApp/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <TodoApp />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
