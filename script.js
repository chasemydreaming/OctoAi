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
                'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // <-- replace with your key
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

// Press Enter to send, Shift+Enter for newline
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // prevents Enter from creating a new line
        sendMessage();      // calls async sendMessage function
    }
});
