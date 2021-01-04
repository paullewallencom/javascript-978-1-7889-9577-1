var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
  console.log('GET the json');
  res
    .status(200)
    .json(hotelData);
};

module.exports.hotelsGetOne = function(req, res) {
  console.log('GET hotelId', req.params.hotelId);
  res
    .status(200)
    .json(hotelData[req.params.hotelId]);
};