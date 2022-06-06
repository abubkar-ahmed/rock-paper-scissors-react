import React from 'react'
import {MyCxt} from '../context/MyContext' ;

function Main() {
    const {clickHandler, chosen, secOne, randomPick, checkStatus, rendringStatus, playAgaing,yourActive,houseActive} = React.useContext(MyCxt);




    function Displayed (){
        if(secOne){
            return (
                <section className='sec-1'>
                <div className='paper' onClick={()=> {clickHandler('paper')}}>
                    <div>
                        <img src='./images/icon-paper.svg' alt='paper'></img>
                    </div>
                </div>
                <div className='rock' onClick={()=> {clickHandler('rock')}}>
                    <div>
                        <img src='./images/icon-rock.svg' alt='rock'></img>
                    </div>
                </div>
                <div className='scissors' onClick={()=> {clickHandler('scissors')}}>
                    <div>
                        <img src='./images/icon-scissors.svg' alt='scissors'></img>
                    </div>
                </div>
            </section>
            )
        }else{
            const HousePicke = () => {
                return(
                    <div className={randomPick} >
                        <div>
                            <img src={`./images/icon-${randomPick}.svg`} alt={randomPick}/>
                        </div>
                        {houseActive &&<span className='span-1'></span>}
                        {houseActive &&<span className='span-2'></span>}
                    </div>
                )
            }
            return(
                <section className='sec-2'>
                    <div className='your-pick'>
                        <h2>YOU PICKED</h2>
                        <div className={chosen} >
                            <div><img src={`./images/icon-${chosen}.svg`} alt={chosen}></img> </div>
                            {yourActive && <span className='span-1'></span>}
                            {yourActive && <span className='span-2'></span>}
                        </div>
                    </div>
                    <div className='house-pick'>
                        <h2>THE HOUSE PICK</h2>
                        {!rendringStatus && <div className='holding'><div></div></div>}
                        {rendringStatus && <HousePicke />}
                    </div>
                    {rendringStatus && <div className='status'><h2>{checkStatus}</h2> <button onClick={playAgaing}>PLAY AGAIN</button></div>}

                </section>
            )
        }
    }
  return (
    <main>
        <Displayed/>
    </main>
  )
}

export default Main