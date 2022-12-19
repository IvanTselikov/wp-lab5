import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className='light-green darken-3'>
                <div className='nav-wrapper container'>
                    <a href='../public/index.html' className='brand-logo'>Поиск фильмов</a>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li><a href='https://www.imdb.com' target='_blank'>IMDb</a></li>
                        <li><a href='https://www.kinopoisk.ru' target='_blank'>КиноПоиск</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header