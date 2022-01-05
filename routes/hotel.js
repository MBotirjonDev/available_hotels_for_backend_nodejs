var express = require('express');
var HotelSchema = require('../schema/hotel_schema.js');

var router = express.Router();
// CRUD
// GET ALL PRODUCTS
router.get('/', async (req, res, next) => {
  var product = await HotelSchema.find({});
  res.send(product);
});

// GET PRODUCT WITH NAME
router.get('/', async (req, res, next) => {
  var product = await HotelSchema.find({ nameHotel: req.nameHotel });
  res.send(product);
});

// POST PRODUCT TO DB
router.post('/', async (req, res, next) => {
  var product = await HotelSchema.create({

    price: req.body.price,
    imageMountain: req.body.imageMountain,
    nameMountain: req.body.nameMountain,
    imageHotel: req.body.imageHotel,
    nameHotel: req.body.nameHotel,
    locationHotel: req.body.locationHotel,
    nightDrop: req.body.nightDrop
  });
  res.send(product);
});

// UPDATE PATCH FROM DB
router.patch('/', async (req, res, next) => {
  var product = await HotelSchema.findOneAndUpdate(
    { nameHotel: req.body.oldNameHotel },
    {
      price: req.body.price,
      imageMountain: req.body.imageMountain,
      nameMountain: req.body.nameMountain,
      imageHotel: req.body.imageHotel,
      nameHotel: req.body.nameHotel,
      locationHotel: req.body.locationHotel,
      nightDrop: req.body.nightDrop
    },
    ({ new: true }));
  res.send(product);
});
// DELETE FROM DB
router.delete('/', async (req, res, next) => {
  var product = await HotelSchema.findOneAndDelete({ nameHotel: req.body.oldNameHotel });
  res.send(product);
});

module.exports = router;