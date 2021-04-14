module.exports = function (app) {
    app.use('/api/user', require('./registration.routes'));
    app.use('/api/login', require('./login.routes')); 
    app.use('/api/vote', require('./vote.routes')); 
};
