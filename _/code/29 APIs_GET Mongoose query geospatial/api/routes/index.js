var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

// Hotel routes
router
  .route('/hotels')
  .get(ctrlHotels.hotelsGetAll);

router
  .route('/hotels/:hotelId')
  .get(ctrlHotels.hotelsGetOne);

router
  .route('/hotels/new')
  .post(ctrlHotels.hotelsAddOne);

// Review routes
router
  .route('/hotels/:hotelId/reviews')
  .get(ctrlReviews.reviewsGetAll);

router
  .route('/hotels/:hotelId/reviews/:reviewId')
  .get(ctrlReviews.reviewsGetOne);

module.exports = router;