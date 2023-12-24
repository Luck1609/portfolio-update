import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import App from './App'
import './index.css'
import Helper from './helpers';
import { SWRConfig } from 'swr';
import StateContextProvider from './reducer/useStateReducer';
import Alert from './components/Alert';
import NoticeModal from './components/NoticeModal';


const {api, http} = Helper

const fetcher = (url: string) => http.get(`${api}${url}`);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <SWRConfig value={{fetcher}}>
        <StateContextProvider>
          <Alert />
          <NoticeModal />
          <App />
        </StateContextProvider>
      </SWRConfig>
    </StyledEngineProvider>
  </React.StrictMode>,
)
