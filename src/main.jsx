import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout'
import './styles/global.css'

const handleGitHubPagesRouting = () => {
  const repoName = '/foru'
  const currentPath = window.location.pathname

  // Корректируем URL только если работаем на GitHub Pages
  if (process.env.NODE_ENV === 'production' &&
    !currentPath.startsWith(`${repoName}/`) &&
    currentPath !== `${repoName}`) {
    window.history.replaceState(null, '', `${repoName}${currentPath}`)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/foru">
      <Layout />
      {handleGitHubPagesRouting()}
    </BrowserRouter>
  </React.StrictMode>
)