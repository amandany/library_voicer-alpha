import React from 'react'
import styles from './BookPage.module.scss'
import book from '../../img/book.png'
import BookHeading from './BookHeading/BookHeading'
import BookLocation from './BookLocation/BookLocation'
import BookCharacteristic from './BookCharacteristic/BookCharacteristic'
import BookDescription from './BookDescription/BookDescription'

const BookPage = () => {
    return (
        <div className={styles.BookPageContainer}>
            <div className={styles.bookSide}>
                <img src={book} alt="Книга не найдена" />
            </div>
            <div className={styles.bookDetailBox}>
                <BookHeading />
                <BookLocation />
                <BookCharacteristic />
                <BookDescription />
            </div>
        </div>
    )
}

export default BookPage
