import React from 'react'
import styles from './SmallBook.module.scss'
import book from '../../img/book.png'

const SmallBook = () => {
    return (
        <div className={styles.SmallBookContainer}>
            <div className={styles.SmallBookImgBox}>
                <img src={book} alt="book" />
            </div>
            <div className={styles.SmallBookTextBox}>
                <h1>"То были времена
                    чудес и странствий"</h1>
                <p>Владимир Коровин</p>
            </div>
        </div>
    )
}

export default SmallBook
