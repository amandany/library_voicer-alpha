import React from 'react'
import styles from './ShowCurrentTag.module.scss'
import Writters from '../Writters/Writters'
import Genre from '../Genre/Genre'
import Years from '../Years/Years'

const ShowCurrentTag = ({ TagName }) => {
    if (TagName === "") return null
    else {
        if(TagName=== "Writters"){
            return <Writters />
        }
        if(TagName=== "Genre"){
            return <Genre />
        }
        if(TagName=== "Year"){
            return <Years />
        }
    }
}

export default ShowCurrentTag
