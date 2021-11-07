import React from 'react'
import styles from './SearchPanel.module.scss'
import search from '../../../img/search.png'

const SearchPanel = () => {
    return (
        <div className={styles.SearchPanelBox}>
            <input type="text" className={styles.SearchPanel}
                placeholder="Введите название книги или имя автора">
            </input>
            <button className={styles.searchBtn}>
                <img src={search} alt="search" />
            </button>
        </div>
    )
}

export default SearchPanel
