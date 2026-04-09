const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatBox = document.getElementById('chatBox');

// Sample AI responses
const responses = [
    "That's interesting! Tell me more.",
    "I understand. How can I assist you further?",
    "Great question! I'm here to help.",
    "I see what you mean. What else would you like to know?",
    "Thanks for sharing! Is there anything else?",
    "That's a good point. Let me think about that...",
    "Absolutely! I'm happy to help with that.",
    "Interesting perspective. Tell me more about it.",
    "I appreciate that question!",
    "That's a wonderful idea!"
];

function sendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Display user message
    addMessage(message, 'user');
    userInput.value = '';
    
    // Simulate bot thinking
    setTimeout(() => {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageText = document.createElement('p');
    messageText.textContent = text;
    
    messageDiv.appendChild(messageText);
    chatBox.appendChild(messageDiv);
    
    // Auto-scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
