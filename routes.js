module.exports = function(app){
    var musicians = require('./controllers/resumes.js');
    app.get('/resumes', resume.findAll);
    app.get('/resumes/:id', resume.findById);
    app.post('/resumes', resume.add);
    app.put('/resumes/:id', resume.update);
    app.delete('/resumes/:id', resume.delete);
}
