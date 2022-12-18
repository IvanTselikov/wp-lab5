import React from 'react'
import Card from './Card'

const Movies = (props) => {
    const { movies } = props
    console.log(movies)
    return (
        <div className='movies'>
            { movies.length 
            ? movies.map(movie => <Card key={movie.imdbID} {...movie} />)
            : <p>Ничего не найдено!</p>
            }
        </div>
    )
}

export default Movies