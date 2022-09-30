const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/pizza.jpg" alt="pizza" />
                <div>
                    Photo by <a href="https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brett Jordan</a> on <a href="https://unsplash.com/s/photos/pepperoni-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                </div>
                </div>
            </main>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </Def>
    )
}

module.exports = home