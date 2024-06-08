import { } from 'react'
import './App.css'
// import { Logo } from './icons'
import { ReactComponent as Logo } from './assets/icons/logo.svg'


function App() {

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar__logo"><Logo/></div>
        <div className="sidebar__account"></div>
        <div className="sidebar__list">
          <div className="sidebar__list_item"></div>
          <div className="sidebar__list_item"></div>
          <div className="sidebar__list_item"></div>
          <div className="sidebar__list_item"></div>
          <div className="sidebar__list_item"></div>
          <div className="sidebar__list_item"></div>
          <div className="sidebar__list_item"></div>
          <div className="sidebar__list_item"></div>
          <div className="sidebar__list_item"></div>
          <div className="sidebar__list_item"></div>
        </div>
      </div>
      <div className="main">

      </div>
    </div>
  )
}

export default App
