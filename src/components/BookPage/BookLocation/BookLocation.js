import React from 'react'
import styles from './BookLocation.module.scss'

const BookLocation = () => {
    return (
        <div className={styles.locationbox}>
            <div>
                <p>Зал</p>
                <h3>24</h3>
            </div>
            <div className={styles.middlediv}>
                <p>Ряд</p>
                <h3>12</h3>
            </div>
            <div>
                <p>Полка</p>
                <h3>0</h3>
            </div>
        </div>
    )
}

export default BookLocation
