import React, { useState, useEffect } from 'react';
import style from './MemeForm.module.css';

const MemeForm = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMemeImages, setAllMemeImages] = useState([])

  useEffect(async () => {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemeImages(data.data.memes)
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }

  return (
    <div>
        <div className={style.form}>
            <input 
                type="text"
                placeholder="Top text"
                className={style['form-input']}
                name='topText'
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className={style["form-input"]}
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
            />
            <button 
                className={style["form-button"]}
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <div className={style.meme}>
            <img src={meme.randomImage} className={style["meme-image"]} />
            <h2 className={style["meme--text-top"]}>{meme.topText}</h2>
            <h2 className={style["meme--text-bottom"]}>{meme.bottomText}</h2>
        </div>
    </div>
  )
}

export default MemeForm;