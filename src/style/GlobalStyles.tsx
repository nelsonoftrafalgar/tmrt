'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .main-app-container {
    padding-top: ${({ theme }) => theme.gridUnit * 20}px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export default GlobalStyles
