const router = require('express').Router()
const db = require('../models')


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
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})
// New
router.get('/new', (req, res) => {
  res.render('places/new')
})

// Show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
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

router.post('/id:/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/id:/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router