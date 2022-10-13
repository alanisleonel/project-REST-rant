const router = require('express').Router()
const db = require('../models')
const { populate } = require('../models/comment')


// Index
router.get('/', (req, res) => {
   db.Place.find()
   .then((places) => {
     res.render('places/index', { places })
   })
   .catch(err => {
     console.log(err)
     res.render('error404')
   }) 
})

// POST
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  // Error message
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', {message})
    }
    else {
    res.render('error404')
    }
  })
})


// New
router.get('/new', (req, res) => {
  res.render('places/new')
})

// Show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

  //Put
router.put('/:id', (req, res) => {
  res.send('PUT /places/id: stub')
})

//delete
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/id: stub')
})

  // Edit
router.get('/:id/edit', (req, res) => {
  res.send('GET edit from stub')
})

//Comments
router.post('/id:/rant', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
  .then(place => {
    //Todo: Create comment
    db.Comment.create(req.body)
    .then(comment => {
      //Todo: Save comment id to place
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch(err => {
      res.render('error404')
    })
  })
  .catch(err => {
    res.render('error404')
  })

res.send('GET /places/:id/rant stub')
})

router.delete('/id:/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router