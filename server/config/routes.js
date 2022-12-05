const authController = require('../controllers/authController');
//const songController = require('../controllers/songController');

module.exports = (app) => {
    app.use('/auth', authController);
    //app.use('/catalog', songController);
};