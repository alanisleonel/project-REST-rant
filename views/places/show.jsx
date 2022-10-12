const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <img src={data.place.pic} alt={data.place.name}/>
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
                <section>
                    <h1>Rating</h1>
                    <p>currently unrated</p>
                    </section>
                <div>
                    <h2>Description</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                </div>
                <hr/>
                <section>
                    <h1>Comments</h1>
                    <p>no comments yet!</p>
                </section>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show