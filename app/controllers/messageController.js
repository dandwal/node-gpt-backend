const openAI = require('../services/openAI');

const processMessage = async(request, response) => {
    const textRequest = request.body.text;
    const result = await openAI.getAIResponse(textRequest);
    response.status(200).json({ result: result });
}

module.exports = {
    processMessage,
};