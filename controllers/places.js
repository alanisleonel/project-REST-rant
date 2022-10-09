const router = require('express').Router()
const db = require('../models')


//
router.get('/', (req, res) => {
   db.Place.find()
   .then((places) => {
     res.render('places/index', { places })
   })
   .catch(err => {
     console.log(err)
     res.sender('error404')
   }) 
})
//done
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then()
  .catch()
})
//done
router.get('/new', (req, res) => {
  res.render('places/new')
})

//show done
router.get('/:id', (req, res) => {
  res.send('GET /places/id: stub')
})

  //Put done
router.put('/:id', (req, res) => {
  res.send('PUT /places/id: stub')
})

//delete done
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