require('../models/resume.js');
var mongoose = require('mongoose'),
    Resume = mongoose.model('Resume');

// * API FUNCTIONS *

// ----------------
// * BEGIN import
// import function loads the sample resume file.  To add more resumes, use the add function.
var firstRes;
$.getJSON('sampleresume.json', function(response){
    firstRes = response;
    alert(firstRes.property);
})

exports.import = function(req, res){
    Resume.create(
	firstRes, function (err) {
	    if (err) return console.log(err);
	    return res.send(202);
	});
};
// * END import

// ----------------
// * BEGIN findAll
// findAll posts all of the resume entries in the database.
exports.findAll = function(req, res){
    Resume.find({},function(err, results) {
	return res.send(results);
    });
};
// * END findAll

// ----------------
// * BEGIN findById
// findById will find a particular entry according to its database ID.
exports.findById = function() {};

exports.add = function(req, res) {
    Resume.create(req.body, function (err, resume) {
	if (err) return console.log(err);
	return res.send(resume);
    });
}
// * END findByID

// ----------------
// * BEGIN update
// update allows a request to send specific data changes to an entry
exports.update = function(req, res) {
    var id = req.params.id;
    var updates = req.body;

    Resume.update({"_id":id}, req.body,
		    function (err, numberAffected) {
			if (err) return console.log(err);
			console.log('Updated %d resumes', numberAffected);
			res.send(202);
		    });
}
// * END update

// ----------------
// * BEGIN delete
// delete removes an entry based on id number
exports.delete = function(req, res){
    var id = req.params.id;
    Resume.remove({'_id':id},function(result) {
	return res.send(result);
    });
};
// END delete
