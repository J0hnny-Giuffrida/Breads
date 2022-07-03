const React = require('react')
const Default = require('./layouts/default')

function Fourofour () {
    return (
        <Default>
            <h1>ERROR 404</h1>
            <h2>We're sorry, we couldn't find that page for you</h2>
            <h3><a href="/breads">Return to index?</a></h3>
        </Default>
    )
}

module.exports = Fourofour