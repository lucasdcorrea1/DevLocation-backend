 const mongoose = require('mongoose');

 const pointerShema = new mongoose.Schema({
     type: {
         type: String,
         enum: ['Point'],
         require: true,
     },
     coordinates: {
         type: [Number],
         require: true,
     },
 });

 module.exports = pointerShema;