import React from 'react'
import meme from '../img/meme.png'

function Header() {

    return (
        <header>
           
           <img src={meme} alt="meme" className='meme_img' />
            <p className='meme_title'>Meme Generator</p>
        </header>
    )
}

export default Header;