import React, { useState } from 'react'

const Search = (props) => {
    const [ searchValue, setSearchValue ] = useState('')
    const [ type, setType ] = useState('all')

    const { enterHandler } = props

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            enterHandler(searchValue, type)
        }
    }

    const handleFilter = (event) => {
        setType(event.target.value,
            () => enterHandler(searchValue, type))
    }

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    type='text'
                    value={ searchValue }
                    onChange={ event => setSearchValue(event.target.value) }
                    onKeyUp={ handleEnter }
                    placeholder='Фильм/сериал...'
                />
                <button
                    className='btn'
                    onClick={ () => enterHandler(searchValue, type) }>
                    Найти
                </button>
            </div>
            <p>
                <label>
                    <input
                        type='radio'
                        name='type'
                        value='all'
                        onChange={ handleFilter }
                        checked={ type === 'all' }
                        className='with-gap'
                    />
                    <span>Все</span>
                </label>
                <label>
                    <input
                        type='radio'
                        name='type'
                        value='movie'
                        onChange={ handleFilter }
                        checked={ type === 'movie' }
                        className='with-gap'
                    />
                    <span>Только фильмы</span>
                </label>
                <label>
                    <input
                        type='radio'
                        name='type'
                        value='series'
                        onChange={ handleFilter }
                        checked={ type === 'series' }
                        className='with-gap'
                    />
                    <span>Только сериалы</span>
                </label>
            </p>
        </div>
    )
}

export default Search