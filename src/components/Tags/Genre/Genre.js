import React from 'react'
import { Checkbox } from 'antd';
import '../Antd.css'
import styles from './Genre.module.scss'
const CheckboxGroup = Checkbox.Group;

const Genre = () => {

    let ArrayLenght = Array(20).fill(1).map((v, i) => {
        return { label: i, value: `${i}_value` }
    })


    return (
        <div className={styles.WrittersContainer}>
            <CheckboxGroup
                className={styles.genreblock}
                defaultValue={["Apple"]}
            >
                {
                    ArrayLenght.map((_, i) => {
                        return <Checkbox style={{ width: "1000px" }} value={i}><p>Жанр {i}</p></Checkbox>
                    })
                }
            </CheckboxGroup>
        </div>
    )
}

export default Genre
