import React from 'react'
import styles from './Writters.module.scss'
import { Checkbox } from 'antd';
import '../Antd.css'
const CheckboxGroup = Checkbox.Group;
const Writters = () => {
    let ArrayLenght = Array(20).fill(1).map((v, i) => {
        return { label: i, value: `${i}_value` }
    })
    const onChange = (checkedValues) => {
        console.log("checked = ", checkedValues);
    }
    return (
        <div className={styles.WrittersContainer}>
            <CheckboxGroup
                className={styles.authorblock}
                defaultValue={["Apple"]}
                onChange={onChange}
            >
                {
                    ArrayLenght.map((_, i) => {
                        return <Checkbox style={{ width: "1000px" }} value={i}><p>Абатуров Константин Иванович{i}</p></Checkbox>
                    })
                }
            </CheckboxGroup>
        </div>
    )
}

export default Writters
