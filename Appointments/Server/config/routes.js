const itemController = require('../controllers/items');
const authController = require('../controllers/auth');
const path = require('path');

module.exports = function(app) {
    app.get('/api/items', itemController.index);
    app.post('/api/items', itemController.create);
    app.get('/api/items', itemController.showAll);
    app.get('/api/items/:search', itemController.search);
    app.get('/api/items/:item_id', itemController.show);
    //app.put('/api/items/:item_id', itemController.update);
    app.delete('/api/items/:item_id', itemController.destroy);

    app.post('/auth/login', authController.login);
    app.post('/auth/register', authController.register);
    app.delete('/auth/logout', authController.logout);

    app.all('*', function(request, response) {
        response.sendFile(path.resolve('dist', 'index.html'));
    });
};