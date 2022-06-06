import React from 'react'

function Rules() {
    const rulsRef = React.useRef(null);

    function clickHandler(){
        rulsRef.current.classList.toggle('display-none')
    }

  return (
    <div className='rules-div'>
        <button className='rules' onClick={clickHandler}>RULES</button>
        <div className='full-width display-none' ref={rulsRef}>
            <div className='ruls-container'>
                <h1>RULES</h1>
                <img src='./images/image-rules.svg' alt='rules'></img>
                <div className='close' onClick={clickHandler}></div>
            </div>
        </div>
    </div>
  )
}

export default Rules