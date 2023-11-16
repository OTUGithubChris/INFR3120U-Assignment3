let mongoose = require('mongoose');

// create a model class
let assignmentModel = mongoose.Schema({
    Name:String,
    Class:String,
    Due:String,
    Worth:String,
    Grade:String
},
{
    collection:"assignment_list"
});
module.exports = mongoose.model('Assignment', assignmentModel);
