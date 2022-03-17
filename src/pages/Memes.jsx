import React from 'react'
import MemeForm from '../components/memes/MemesForm/MemeForm';
import MemesHeader from '../components/memes/MemesHeader/MemesHeader';

const Memes = () => {
  return (
    <div>
        <MemesHeader/>
        <MemeForm/>
    </div>
  )
}

export default Memes;