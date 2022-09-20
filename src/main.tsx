import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './routes'

import { AuthProvider } from './hooks/auth'

//import { FavoritesProvider } from "../../hooks/favorites";

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
