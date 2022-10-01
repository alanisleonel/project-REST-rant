const router = require('express').Router()
const places = require('../models/places')

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    //provide default image if one is not provided.
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    //default city
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    //default state
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

/*router.get('/:id', (req, res) => {
  res.render('places/id:')
})*/

module.exports = router