const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        // Reduce iterator to show average of ratings.
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length) 
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
        return (
            <div className="border">
                <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                <h4>{c.content}</h4>
                <h3>
                  <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
              </div>
            )
          })
        }
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <h2>
                    Rating
                </h2>
                {rating}
                <br />
                <img src={data.place.pic} alt={data.place.name}/>
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
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
                    <h2>Comments</h2>
                    {comments}
                    {/*Comments form*/}
                    <form method="POST" action={`/places/${data.place.id}/comment?_method=POST`}>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Comment</label>
                        <textarea className="form-control" id="content" name="content" rows="3"></textarea>
                    </div>
                    <div className="row">
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="author">Author Name</label>
                        <input className="form-control" id="author" name="author"/>
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="stars">Star Rating</label>
                        <input type="number" className="form-control" id="stars" name="stars" step="0.5"/>
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-6">
                        <label htmlFor="rant">Rant?</label>
                        <input type="checkbox" className="form-control" id="rant" name="rant"/>
                    </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment"/>
                    </form>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show