const messageController = require('../app/controllers/messageController');

module.exports = function(app) {
    app.post('/api/messages', messageController.processMessage);
    app.options('/api/messages', messageController.processMessageOptions);
};