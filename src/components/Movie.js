import React from 'react'

const Movie = (props) => {
    const { Title, Year, Runtime, Genre, Actors, Plot, Poster } = props
    const text = Title.replace(/^a-z0-9 /i, '').replace(/\s/, '+')
    
    return (
        <div className="row">
            <div className="col s12">
                <a className='waves-effect waves-light btn'
                   style={ { marginBottom: '2rem' } }
                   onClick={ () => document.querySelector('.input-field .btn').click() }
                   >
                    <i className='material-icons left'>⮌</i>
                    Назад
                </a>
                <h1 style={{ marginTop: 0 }}>{Title}</h1>
            </div>
            <div className="col s5">
                { Poster !== 'N/A' ? (
                    <img
                        className="responsive-img"
                        src={ Poster }
                        alt=""
                    />
                ) : (
                    <img
                        className="responsive-img"
                        src={`https://via.placeholder.com/300x430.png?text=${text}`}
                        alt=""
                    />
                ) }
            </div>
            <div className="col s7">
                <ul style={{marginTop: 0}}>
                    <li>Год: {Year}</li>
                    <li>Продолжительность: {Runtime}</li>
                    <li>Жанр: {Genre}</li>
                    <li>Актёры: {Actors}</li>
                </ul>
                <p>{ Plot }</p>
            </div>
        </div>
    )
}

export default Movie