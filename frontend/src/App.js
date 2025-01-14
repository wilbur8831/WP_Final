import './App.css'
import { useState, useEffect } from 'react'
import SignIn from "./containers/SignIn"
import SignUp from "./containers/SignUp"
import Matching from "./containers/Matching"
import useGame from './hooks/useGame'

const App = () => {
  const [status, pressSignIn, pressSignUp, pressBackToSignIn, pressRegister, pressCancel] = useGame();

  const renderSwitch=(status)=>{
    switch(status){
      case 'signin': return <SignIn pressSignIn={pressSignIn} pressSignUp={pressSignUp}/>;
      case 'signup' : return <SignUp pressRegister={pressRegister} pressBackToSignIn={pressBackToSignIn}/>;
      case 'matching' : return <Matching pressCancel={pressCancel}/>;
      default: return <div>case not handled by switch</div>;
    }
  }

  return (
    <div className="Othello">{renderSwitch(status)}</div>
  )
}

export default App
