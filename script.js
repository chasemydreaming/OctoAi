// Assuming this is the new content to fix issues and enhance the script.

document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        // Display user message
        displayMessage(userInput, 'user');
        document.getElementById('userInput').value = '';

        // Simulate an API call to get chatbot response
        // (you would replace this with your actual call)
        simulateChatbotResponse(userInput).then(response => {
            displayMessage(response, 'chatbot');
        });
    }
});

function displayMessage(message, sender) {
    const chatWindow = document.getElementById('chatWindow');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'chatbot-message');
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
}

function simulateChatbotResponse(userInput) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Here you would typically have your logic to determine response
            resolve('Chatbot response for: ' + userInput);
        }, 1000);
    });
}