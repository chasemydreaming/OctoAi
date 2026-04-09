// Grab elements
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatBox = document.getElementById('chatBox');

// Add a message to the chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const messageText = document.createElement('p');
    messageText.textContent = text;

    messageDiv.appendChild(messageText);
    chatBox.appendChild(messageDiv);

    // Smooth scroll to bottom
    messageDiv.scrollIntoView({ behavior: 'smooth' });
}

// Send user message and call AI
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, 'user'); // show user message
    userInput.value = '';

    const typingMessage = "AI is thinking...";
    addMessage(typingMessage, 'bot'); // show typing indicator

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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 // <-- put your key here
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await response.json();
        const aiText = data.choices[0].message.content;

        // Replace typing indicator with AI response
        chatBox.lastChild.querySelector('p').textContent = aiText;

    } catch (err) {
        chatBox.lastChild.querySelector('p').textContent = "Oops! Something went wrong.";
        console.error(err);
    }
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);

// Enter to send, Shift+Enter for newline
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
        // Send button click
sendBtn.addEventListener('click', sendMessage);

// Press Enter to send, Shift+Enter for newline
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // prevents Enter from making a new line
        sendMessage();      // calls your async sendMessage function
    }
    // Attach events AFTER the elements exist
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatBox = document.getElementById('chatBox');

// Send button click
sendBtn.addEventListener('click', sendMessage);

// Press Enter to send, Shift+Enter for newline
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // stops Enter from adding a newline
        sendMessage();      // calls your AI function
    }
});
});
    }
});
