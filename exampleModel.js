// first, we hook mongoose into the model with require

var mongoose = require ("mongoose");

// then we hava mongoose.Schema class as simply "Schema"
var Schema = mongoose.Schema;


// intensiate new Schema
var ExampleSchema=new Schema({
  // string must be string. we trim it to rmove any trailing white space
  string:{
    type:String,
    trim:true,
    required:"String is required"
  },

  // this must be unique number in the collection and it must be entered
  number:{
    type:Number,
    unique:true,
    required:true
  },

  // this will only takes the string that looks like email
emai:{
  type:String,
  match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
},

// boolean must be boolean
boolean:Boolean,
// array must be an array
array:Array,
 // date must be a date. The default date is a current Date
date:{
  type:Date,
  defaule: Date.now()
},

// Notice the validate array in this subobject
// this lets us make customized validation function for our model
longstring:{
  type: String,
  validate:[
  //   function takes in the values as an argument
  function(input){
    // if this returns true then proceed, if not return error
    return input.length>=6;
  },
  // error message
  "Longstring should be longer."
]
}
});

// this cerates our model from the above schema, using mongoose's model method
var Example=mongoose.model("Example", ExampleSchema);

// Finally, we export the model, allowing server.js to hook into it with a require statement
module.exports=Example;
