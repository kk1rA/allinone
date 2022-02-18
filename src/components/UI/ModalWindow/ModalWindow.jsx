import React from 'react';
import styles from './ModalWindow.module.css';

const Modalwindow = ({children, visible, setVisible}) => {

    const rootClasses = [styles.modal]
    if(visible) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join('  ')} onClick={() => setVisible(false)}>
            <div className={styles.modalContent} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modalwindow;