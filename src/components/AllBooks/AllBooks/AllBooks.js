import React from 'react'
import SmallBook from '../../SmallBook/SmallBook'
import styles from './AllBooks.module.scss'

const AllBooks = () => {
    let ArrayLenght = Array(20).fill(1).map((v, i) => i + 1)

    return (
        <div className={styles.SwiperAllBookContainer}>
            {
                ArrayLenght.map((k, i)=>{
                    return(
                        <SmallBook />
                    )
                })
            }
        </div>
    )
}

export default AllBooks
