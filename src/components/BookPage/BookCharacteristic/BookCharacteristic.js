import React from 'react'
import styles from './BookCharacteristic.module.scss'

const BookCharacteristic = () => {
    return (
        <table className={styles.CharacteristicTable}>
            <thead>
                <tr>
                    <th>Жанр</th>
                    <th>Год</th>
                    <th>Страна</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Роман</th>
                    <th>1605</th>
                    <th>Испания</th>
                </tr>
            </tbody>
        </table>
    )
}

export default BookCharacteristic
