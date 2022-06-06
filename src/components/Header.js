import React from 'react'
import {MyCxt} from '../context/MyContext' ;

function Header() {
  const {score,setScore} = React.useContext(MyCxt);
  React.useEffect(()=>{
    if(localStorage.getItem('score')){
      setScore(+localStorage.getItem('score'))
    }else{
      localStorage.setItem('score',score);
    }
  },[])

  React.useEffect(() => {
    localStorage.setItem('score',score);
  },[score]);

  return (
    <header>
      <img src='./images/logo.svg' alt='logo'></img>
      <div>
        <h1>SCORE</h1>
        <h2>{score}</h2>
      </div>
    </header>
  )
}

export default Header