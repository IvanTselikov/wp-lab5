import React, { useEffect, useState } from 'react'
import Movies from '../components/Movies'
import Search from '../components/Search'
import Movie from '../components/Movie'

const Main = () => {
    const [ movies, setMovies ] = useState([])  // массив найденных фильмов
    const [ movie, setMovie ] = useState({})  // информация о фильме
    const [ loading, setLoading ] = useState(true)  // true, если идёт запрос к api
    const [ show, setShow ] = useState('index')  // index, search, movie

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=4ae1d6a&s=sherlock')
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search ? data.Search : [])
                setLoading(false)
            })
    }, [])

    const handleEnter = (search, type) => {
        if (search.trim() !== '') {
            setLoading(true)
            setShow('search')
            search = encodeURIComponent(search)
            let url = `http://www.omdbapi.com/?apikey=4ae1d6a&s=${search}`
            if (type !== 'all') {
                url += `&type=${type}`
            }
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setMovies(data.Search ? data.Search : [])
                    setLoading(false)
                })
        }
    }

    const handleReadMore = (id) => {
        setLoading(true)
        setShow('movie')
        fetch(`http://www.omdbapi.com/?apikey=4ae1d6a&i=${id}&plot=full`)
            .then(response => response.json())
            .then(data => {
                setMovie(data.Title ? data : {})
                setLoading(false)
            })
    }

    return (
        <main className='container'>
            <Search enterHandler={ handleEnter } />
            { loading
            ? <div className='loader'>Загрузка...</div>
            : show === 'movie'
                ? (<Movie { ...movie } />)
                : (<Movies
                        movies={ movies }
                        readMoreHandler={ handleReadMore }
                    />
                )}
        </main>
    )
}

export default Main
