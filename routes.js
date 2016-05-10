module.exports = function(app){
    var resumes = require('./controllers/resumes.js');
    app.get('/resumes', resumes.findAll);
    app.get('/resumes/:id', resumes.findById);
    app.post('/resumes', resumes.add);
    app.put('/resumes/:id', resumes.update);
    app.delete('/resumes/:id', resumes.delete);
}
