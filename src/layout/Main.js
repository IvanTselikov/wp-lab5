import React, { useEffect, useState } from 'react'
import Movies from '../components/Movies'
import Search from '../components/Search'

const Main = () => {
    const [ movies, setMovies ] = useState([])
    const [ loading, setLoading ] = useState(true)

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

    return (
        <main className='container'>
            <Search enterHandler={ handleEnter } />
            { loading
            ? <div className='loader'>Загрузка...</div>
            : <Movies movies={ movies } /> }
        </main>
    )
}

export default Main
