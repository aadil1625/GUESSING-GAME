<html>
  <head></head>
  <body>
    <h1>Guessing Game</h1>   
    <h2>Project Overview</h2>
    <p>This is a simple <strong>Number Guessing Game</strong> where the player needs to guess a random number between 1 and 100. The player has 10 attempts to guess the correct number. After each guess, the game provides feedback, indicating whether the guess was too low, too high, or correct.</p>
    <h2>Features</h2>
    <ul>
        <li>Random number generation between 1 and 100.</li>
        <li>User has up to 10 attempts to guess the correct number.</li>
        <li>Feedback is provided for each guess, such as "Too Low" or "Too High".</li>
        <li>Displays previous guesses and the number of attempts remaining.</li>
        <li>Option to start a new game after completing one.</li>
    </ul>
    <h2>How to Play</h2>
    <ol>
        <li>Enter a number between 1 and 100 in the input field.</li>
        <li>Click the <strong>"Submit Guess"</strong> button.</li>
        <li>The game will provide feedback about whether your guess was too low or too high.</li>
        <li>You can view your previous guesses and the number of remaining attempts.</li>
        <li>If you guess correctly, the game will display a winning message and offer the option to start a new game.</li>
        <li>If you use all 10 guesses without guessing correctly, the game will end and reveal the correct number.</li>
    </ol>
    <h2>Technologies Used</h2>
    <ul>
        <li>React for building the user interface and handling the game logic.</li>
        <li>CSS for styling and enhancing the user experience.</li>
    </ul>
    <h2>How to Run the Project</h2>
    <ol>
        <li>Download or clone the project from the repository.</li>
        <li>Ensure all the required files are in the same folder, including the <strong>React</strong> and <strong>CSS</strong> files.</li>
        <li>Run <code>npm install</code> to install all the dependencies.</li>
        <li>Start the development server by running <code>npm start</code>.</li>
        <li>Open the application in a web browser and start playing the game.</li>
    </ol>
    <h2>Project Structure</h2>
    <ul>
        <li><strong>src/components/Game.js</strong>: The React component containing the main game logic and interactivity.</li>
        <li><strong>src/components/App.js</strong>: The main entry point for rendering the game component.</li>
        <li><strong>src/styles/Game.css</strong>: The CSS file for styling the game.</li>
    </ul>
    <h2>Future Enhancements</h2>
    <ul>
        <li>Add more difficulty levels with different ranges of numbers.</li>
        <li>Implement a timer to make the game more challenging.</li>
        <li>Enhance the user interface with improved styling and animations.</li>
    </ul>
  </body>
</html>