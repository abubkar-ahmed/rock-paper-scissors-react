import React, { createContext } from 'react'

export const MyCxt = createContext(0);


function MyContext(props) {
  const [secOne, setSecOne] = React.useState(true);
  const [chosen, setChosen] = React.useState("");
  const [randomPick, setRandonPick] = React.useState("");
  const [checkStatus, setCheckStatus] = React.useState("");
  const [rendringStatus, setReandringStatus] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [yourActive, setYourActive] =React.useState(false);
  const [houseActive, setHouseActive] =React.useState(false);






  const increments = () => {
    setTimeout(() => {
      setScore( prevScore => prevScore + 1)
      setYourActive(true);
    }, 1000); 
  };
  const lost = () => {
    setTimeout(() => {
      setHouseActive(true);
    }, 1000);
  }



  function clickHandler(id) {
    setChosen(id)
    setSecOne(prevSecOne => !prevSecOne);
    setRandonPick(() => {
      const randomNumber = Math.floor(Math.random() * 3 + 1);
      if (randomNumber === 1) {
        return 'paper';
      } else if (randomNumber === 2) {
        return 'rock';
      } else {
        return 'scissors';
      }
    })
    setTimeout(() => {
      setReandringStatus(prevRendringStatus => !prevRendringStatus);
    }, 1000);

  }

  function playAgaing() {
    setChosen("");
    setSecOne(true);
    setRandonPick("");
    setReandringStatus(false);
    setYourActive(false);
    setHouseActive(false);
  }

  React.useEffect(() => {
    setCheckStatus(() => {
      if (chosen === randomPick) {
        return 'TIE'
      } else if ((chosen === 'paper' && randomPick === 'rock') || (chosen === 'scissors' && randomPick === 'paper') ||
        (chosen === 'rock' && randomPick === 'scissors')) {
          increments();
        return 'YOU WIN';
      } else if ((chosen === 'paper' && randomPick === 'scissors') || (chosen === 'rock' && randomPick === 'paper') ||
        (chosen === 'scissors' && randomPick === 'rock')) {
          lost();
        return 'YOU LOSE';
      }
    })
  }, [chosen])

  const value = { clickHandler, chosen, secOne, randomPick, checkStatus, rendringStatus, playAgaing, score,setScore,yourActive,houseActive }
  return (
    <MyCxt.Provider value={value}>
      {props.children}
    </MyCxt.Provider>
  )
}

export default MyContext