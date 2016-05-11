require('../models/resume.js');
var mongoose = require('mongoose'),
    Resume = mongoose.model('Resume');

exports.findAll = function(req, res){
    Resume.find({},function(err, results) {
	return res.send(results);
    });
};
exports.findById = function() {};
exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};
