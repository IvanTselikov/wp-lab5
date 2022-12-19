import React from 'react'
import Card from './Card'

const Movies = (props) => {
    const { movies, readMoreHandler } = props
    return (
        <div className='movies'>
            { movies.length
            ? movies.map(movie => 
                <Card 
                    key={ movie.imdbID }
                    readMoreHandler={ readMoreHandler }
                    { ...movie } />)
            : <p>Ничего не найдено!</p>
            }
        </div>
    )
}

export default Movies