# AI Server 🚀

This is a server-side application for the RBL Project, utilizing Google's Generative AI for text and image processing. The server is built with Node.js and Express.

## Getting Started 🏁

These instructions will help you set up the project on your local machine for development and testing purposes.


### Installation 🔧

1. **Clone the repository:**
    ```sh
    git clone https://github.com/rbl-project-ADD/ai-server.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd ai-server
    ```

3. **Install the dependencies:**
    ```sh
    npm install
    ```

4. **Create a `.env` file in the root directory and add the following environment variables:**
    ```sh
    GEMINI_API_KEY="your_api_key_here"
    ```

5. **Start the server:**
    ```sh
    npm start
    ```


## API Endpoints 🛣️📡

| Route                     | HTTP Method | Description                                                           |
|---------------------------|-------------|-----------------------------------------------------------------------|
| /                         | GET         | Returns a greeting from the server                                    |
| /chat                     | GET         | Returns a greeting from the chat router                               |
| /chat/process-text        | POST        | Processes a text input in the body and gives output as a string       |
| /chat/process-text-stream | POST        | Processes a text input in the body as a stream using the Gemini model |
| /chat/process-image       | POST        | Processes an image input with a prompt in form-data using the Gemini model |
|                           |             |                                         |
| /images                   | GET         | Returns a greeting from the chat router |
| /images/fal               | POST        | Processes an image input with a prompt and model selection using the FAL AI service |
