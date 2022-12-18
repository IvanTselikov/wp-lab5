import React from 'react'

const Footer = () => {
    return (
        <footer className = "page-footer light-green darken-3">
            <div className = "container">
                © {new Date().getFullYear()} Все права защищены
            </div>
        </footer>
    )
}

export default Footer