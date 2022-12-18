import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="light-green darken-3">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">Поиск фильмов</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Ссылка 1</a></li>
                        <li><a href="#">Ссылка 2</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header