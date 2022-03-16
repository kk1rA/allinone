import React from 'react';
import styles from './MemesHeader.module.css'

const MemesHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>Meme Generator</div>
      <div className={styles.headerDescription}>Random popular memes picture</div>
    </header>
  )
}

export default MemesHeader;