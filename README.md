# A simple custom node backend for openAI

## Introduction

Just an API

## Getting started

1. Update the .env providing your openAiApi key to the variable `OPENAI_API_KEY`.

2. Install and run
```bash
npm install;
npm start;
```

3. Application can then be reached on port 3000 by default to change this add a `PORT` variable to the .env with the desired port number the application should run on.

## Endpoints

Open AI spec to come but for now this should suffice

### api/messages
Verb: POST 

```json
{ text: "X" }
```
Where `X` is the message to send to openAI.

The result will come back as
```json
{
    "result": "Yes, as an AI language model, I am currently able to respond to this message."
}
```