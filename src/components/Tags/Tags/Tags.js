import React, { useState } from 'react'
import ShowCurrentTag from '../ShowCurrentTag/ShowCurrentTag'
import TagsLine from '../TagsLine/TagsLine'
import styles from './Tags.module.scss'
const Tags = () => {
    const [TagName, setTagName] = useState("")
    const ClickedTag = (id) => {
        setTagName(id);
    }
    return (
        <div className={styles.tagsContainer}>
            <div style={{ width: "2164px"}}>
                <TagsLine ClickedTag={ClickedTag} TagName={TagName} />
                <ShowCurrentTag TagName={TagName} />
            </div>

        </div>
    )
}

export default Tags
