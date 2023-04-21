const openAI = require('../services/openAI');

const processMessage = async(request, response) => {
    const textRequest = request.body.text;
    const result = await openAI.getAIResponse(textRequest);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    response.status(200).json({ result: result });
}
const processMessageOptions = async(request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    response.status(200).json({ result: 'ok' });
}


module.exports = {
    processMessage,
    processMessageOptions,
};