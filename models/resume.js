var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResumeSchema = new Schema({
    basics: {
	name: {type: String},
	label: {type: String},
	picture: {type: String},
	email: {type: String},
	phone: {type: String},
	website: {type: String},
	summary: {type: String},
	location: {
	    address: {type: String},
	    postalCode: {type: String},
	    city: {type: String},
	    countryCode: {type: String},
	    region: {type: String},
	},
	profiles: [{
	    network: {type: String},
	    username: {type: String},
	    url: {type: String},
	}]
    },
    work: [{
	company: {type: String},
	position: {type: String},
	website: {type: String},
	startDate: {type: String},
	endDate: {type: String},
	summary: {type: String},
	highlights: [{type: String}]
    }],
    volunteer: [{
	organization: {type: String},
	position: {type: String},
	website: {type: String},
	startDate: {type: String},
	endDate: {type: String},
	summary: {type: String},
	highlights: [{type: String}]
    }],
    education: [{
	institution: {type: String},
	area: {type: String},
	studyType: {type: String},
	startDate: {type: String},
	endDate: {type: String},
	gpa: {type: Number},
	courses: [{type: String}]
    }],
    awards: [{
	title: {type: String},
	date: {type: String},
	awarder: {type: String},
	summary: {type: String},
    }],
    publications: [{
	name: {type: String},
	publisher: {type: String},
	releaseDate: {type: String},
	website: {type: String},
	summary: {type: String},
    }],
    skills: [{
	name: {type: String},
	level: {type: String},
	keywords: [String]
    }],
    languages: [{
	name: {type: String},
	level: {type: String},
    }],
    interests: [{
	name: {type: String},
	keywords: [{type: String}]
    }],
    references: [{
	name: {type: String},
	reference: {type: String}
    }]
});


mongoose.model('Resume', ResumeSchema);
