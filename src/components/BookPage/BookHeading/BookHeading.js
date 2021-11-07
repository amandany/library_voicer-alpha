import React from 'react'
import styles from './BookHeading.module.scss'

const BookHeading = () => {
    return (
        <>
            <h2 className={styles.bookAuthor}>Мигель де Сервантес</h2>
            <h1 className={styles.bookName}>Хитроу́мный ида́льго Дон Кихо́т Лама́нчский</h1>
            <p className={styles.bookISBN}>ISBN: 978-5-17-112629-2</p>
        </>
    )
}

export default BookHeading
