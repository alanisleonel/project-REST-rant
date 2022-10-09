const mongoose = require('mongoose')
module.exports.Place = require('./places')
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true},
  pic: String,
  cuisines: { type: String, required: true},
  city: { type: String, default: 'Anytown'},
  state: { type: String, default: 'USA'},
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

/*places array with made up data
module.exports = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coding-cafe.jpg'
      }]*/

