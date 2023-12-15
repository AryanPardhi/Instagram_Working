const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/instadb");

const postSchema = mongoose.Schema({
  picture : String,
  
  date : {
    type : Date,
    default : Date.now,
  },

  caption : String,

  user :{
    type: mongoose.Schema.Types.ObjectId,
    ref : "user",
  },

  likes : [
    {
        type :mongoose.Schema.Types.ObjectId,
        ref : "user",
    }
  ],

});

module.exports = mongoose.model("post",postSchema);