# FURIA E-Sports Chatbot

## Overview
The FURIA E-Sports Chatbot is a web-based chatbot designed to provide real-time information about FURIA E-Sports teams, including news about their games and tournaments. The bot responds dynamically to user inputs, offering personalized responses based on topics such as CS2, LoL, Valorant, and Kings League.

## Features
- Dynamic responses based on the user's input, including topics such as CS2, LoL, Valorant, and Kings League.
- A typing indicator to simulate bot activity and create a more interactive user experience.
- Smooth scrolling of the chat for a better visual experience.
- Customizable responses for different topics in FURIA E-Sports.

## Tech Stack
- **Frontend**: React.js with TypeScript
- **Styling**: TailwindCSS for responsive design
- **State Management**: React `useState` and `useEffect` hooks
- **Data**: Static responses stored in a separate `responses.ts` file

## Setup & Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Caruso013/furia-chatbot.git
    cd furia-chatbot
    ```

2. **Install dependencies**:
    If you have `npm` or `yarn` installed, you can use either to install dependencies.
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the development server**:
    Start the development server to see the chatbot in action.
    ```bash
    npm start
    # or
    yarn start
    ```

4. **Open your browser**:
    Once the development server is running, open your browser and go to:
    ```bash
    http://localhost:3000
    ```

## Usage

1. Type any message related to FURIA E-Sports (e.g., "CS2", "LoL", "Valorant", "Kings League") into the input box.
2. The bot will dynamically select a response based on the topic of your input.
3. The bot will simulate typing and then reply with a message related to the topic you mentioned.

## How It Works

The `FURIA E-Sports Chatbot` uses a list of predefined responses for different topics in `responses.ts`. Based on user input, the bot determines the relevant topic (e.g., CS2, LoL, Valorant, or Kings League) and returns a random response from the corresponding list.

- **`getRandomResponse` function**: Determines the appropriate response based on the user's input.
- **`Message` structure**: Defines the format of each message, distinguishing between user and bot messages.

## Example Usage

1. **User input**: "Tell me about FURIA CS2."
2. **Bot reply**: "FURIA CS2 won their last match against MIBR!"

## Contributing

Feel free to fork the repository, make changes, and submit pull requests.

### How to add new topics and responses:
1. Open the `responses.ts` file.
2. Add a new entry to the `botResponses` object with the name of the topic and a list of possible responses.
3. Update the chatbot's logic to support new topics based on the user input.

## License

This project is licensed under the **Technical Test License** - see the [LICENSE](LICENSE) file for details.

## Demo

You can access the project demo on Vercel: [FURIA Chatbot Demo](https://furia-chatbot-nine.vercel.app/)