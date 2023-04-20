const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
// Import the openai package and the readline-sync package
const { Configuration, OpenAIApi } = require("openai");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));


// Set your OpenAI API key as an environment variable or pass it as a parameter
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

let messages = [];
const getAIResponse = async(textRequest) => {

    console.log('User:', textRequest);
    let botOutput = "No response"
    messages.push({
        role: "user",
        content: textRequest,
    });
    try {
        response = await openai.createChatCompletion({
            // model: "gpt-4",
            // model: "code-cushman-001",
            model: "gpt-3.5-turbo",
            messages: messages,
        });
        botOutput = response.data.choices[0].message.content;

        messages.push({
            role: "assistant",
            content: botOutput,
        });
    } catch (error) {
        console.log('error:', error);
    }
    console.log('Bot:', botOutput);
    return botOutput;
}

module.exports = {
    getAIResponse,
};