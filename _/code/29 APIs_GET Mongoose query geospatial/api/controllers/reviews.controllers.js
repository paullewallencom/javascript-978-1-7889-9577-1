var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');


// GET all reviews for a hotel
module.exports.reviewsGetAll = function(req, res) {
  var id = req.params.hotelId;
  console.log('GET reviews for hotelId', id);

  Hotel
    .findById(id)
    .select('reviews')
    .exec(function(err, doc) {
      res
        .status(200)
        .json(doc.reviews);
    });
};

// GET single review for a hotel
module.exports.reviewsGetOne = function(req, res) {
  var hotelId = req.params.hotelId;
  var reviewId = req.params.reviewId;
  console.log('GET reviewId ' + reviewId + ' for hotelId ' + hotelId);

  Hotel
    .findById(hotelId)
    .select('reviews')
    .exec(function(err, hotel) {
      var review = hotel.reviews.id(reviewId);
      res
        .status(200)
        .json(review);
    });
};