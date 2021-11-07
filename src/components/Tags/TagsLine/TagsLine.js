import React from 'react'
import './TagsLine.scss';
import down from '../../../img/Icon_down.svg'
const TagsLine = ({ ClickedTag, TagName }) => {
    return (
        <div className={"TagsContainer"}>
            <button className={`TagsBtnClose ${TagName === "Writters" ? "TagsBtnOpen" : ''}`}
                onClick={() => ClickedTag("Writters")}>
                Писатели
                <img src={down} alt="down" />
            </button>
            <button className={`TagsBtnClose ${TagName === "Genre" ? "TagsBtnOpen" : ''}`}
                onClick={() => ClickedTag("Genre")}>
                Жанр
                <img src={down} alt="down" />
            </button>
            <button className={`TagsBtnClose ${TagName === "Year" ? "TagsBtnOpen" : ''}`}
                onClick={() => ClickedTag("Year")}>
                Год
                <img src={down} alt="down" />
            </button>
        </div>
    )
}

export default TagsLine
