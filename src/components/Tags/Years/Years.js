import React from 'react'
import styles from './Years.module.scss'
import { Checkbox } from 'antd';
import '../Antd.css'

const CheckboxGroup = Checkbox.Group;

const Years = () => {
    let ArrayLenght = Array(20).fill(1).map((v, i) => {
        return { label: i, value: `${i}_value` }
    })
    return (
        <div className={styles.WrittersContainer}>
            <CheckboxGroup
                className={styles.yearblock}
                defaultValue={["Apple"]}
            >
                {
                    ArrayLenght.map((_, i) => {
                        return <Checkbox style={{ width: "1000px" }} value={i}><p>Checkbox {i}</p></Checkbox>
                    })
                }
            </CheckboxGroup>
        </div>
    )
}

export default Years
