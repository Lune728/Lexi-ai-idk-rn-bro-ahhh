// Predefined responses and jokes
const responses = [
    "Hello! How can I help you?",
    "I'm Lexi, your AI companion. Ask me anything!",
    "I'm here to assist you.",
    "That's interesting. Tell me more.",
    "Goodbye! Have a great day!",
    "Sure, I can help you with that.",
    "Nice to meet you!",
    "Tell me a joke.",
    "I'm sorry, I don't understand that.",
    "How are you today?",
    "I'm doing well, thank you!",
    "What can I do for you?",
    "I'm here to chat with you."
];

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call fake spaghetti? An impasta!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why was the math lecture so long? The professor kept going off on a tangent.",
    "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why are elevator jokes so good? They work on many levels.",
    "Why was the broom late? It swept in.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "Why did the computer go to the doctor? It had a virus.",
    "What do you call a fish with no eyes? Fsh.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "Why did the coffee file a police report? It got mugged.",
    "Why don't programmers like nature? It has too many bugs.",
    "What does a nosy pepper do? Gets jalapeño business.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How does a snowman get around? By riding an 'icicle'.",
    "Why did the M&M go to school? Because it wanted to be a Smartie.",
    "What do you call a can opener that doesn't work? A can't opener.",
    "Why are skeletons so calm? Because nothing gets under their skin.",
    "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "Why don't vampires attack Taylor Swift? Because she has bad blood.",
    "What's brown and sticky? A stick.",
    "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field and had a brain.",
    "What's orange and sounds like a parrot? A carrot.",
    "Why don't crabs donate to charity? Because they're shellfish.",
    "What's the best time to go to the dentist? Tooth-hurty.",
    "Why did the tree go to the barber? It needed a trim."
];

// List of brainrot words
const brainrotWords = [
    "skibidi", "sigma", "ohio", "rizz", "mew", "grimace shake", "low taper fade", 
    "looksmaxxing", "caseoh", "amogus", "fortnite", "ice spice", "kai cenat", "baby gronk", 
    "aura", "tiktok rizz party", "griddy", "alpha", "sus", "lebron james", "gedagegidagedieo", 
    "fanum tax", "cap", "based", "slay", "beta", "goon", "edge", "thick of it", "quandale dingle", 
    "john pork", "subway surfers", "duolingo", "gyatt"
];

// Function to get the best response
function getResponse(userInput) {
    let response = "I'm not sure how to respond to that.";
    const lowerInput = userInput.toLowerCase();

    // Match user input with predefined responses
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        response = responses[0];
    } else if (lowerInput.includes("bye")) {
        response = responses[4];
    } else if (lowerInput.includes("help") || lowerInput.includes("assist")) {
        response = responses[2];
    } else if (lowerInput.includes("tell me more") || lowerInput.includes("interesting")) {
        response = responses[3];
    } else if (lowerInput.includes("thanks") || lowerInput.includes("thank you")) {
        response = responses[5];
    } else if (lowerInput.includes("who are you")) {
        response = responses[1];
    } else if (lowerInput.includes("meet you")) {
        response = responses[6];
    } else if (lowerInput.includes("joke")) {
        response = getJoke();
    } else if (lowerInput.includes("how are you") || lowerInput.includes("how's it going")) {
        response = responses[10];
    } else if (lowerInput.includes("what can you do")) {
        response = responses[11];
    } else if (lowerInput.includes("pong")) {
        response = "Let's play Pong! Check out this game: https://ponggame.io/";
        console.log("Play Pong at: https://ponggame.io/");
    } else if (lowerInput.includes("calculator")) {
        response = runCalculator();
    } else if (lowerInput.includes("brainrot")) {
        response = `E: ${getRandomBrainrotWord()}`;
    } else {
        response = responses[8];
    }
    return response;
}

// Function to get a random joke
function getJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Function to get a random brainrot word
function getRandomBrainrotWord() {
    const randomIndex = Math.floor(Math.random() * brainrotWords.length);
    return brainrotWords[randomIndex];
}

// Simple calculator function
function runCalculator() {
    const operation = prompt("Enter operation (add, subtract, multiply, divide):");
    const num1 = parseFloat(prompt("Enter first number:"));
    const num2 = parseFloat(prompt("Enter second number:"));
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation.";
    }

    return `Result: ${result}`;
}

// Simple chatbot interface with Comic Sans font
console.log("Lexi: Hi there! (Type 'exit' to quit)");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function chat() {
    readline.question("You: ", (userInput) => {
        if (userInput.toLowerCase() === "exit") {
            console.log("Lexi: Goodbye!");
            readline.close();
        } else {
            console.log(`%cLexi: ${getResponse(userInput)}`, "font-family: 'Comic Sans MS', cursive, sans-serif");
            chat();
        }
    });
}

chat();
