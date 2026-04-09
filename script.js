async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    userInput.value = '';

    addMessage("AI is thinking...", 'bot'); // optional typing indicator

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify({
                model: "gpt-4", 
                messages: [{role: "user", content: message}]
            })
        });

        const data = await response.json();
        const aiText = data.choices[0].message.content;

        addMessage(aiText, 'bot');
    } catch (err) {
        addMessage("Oops! Something went wrong.", 'bot');
        console.error(err);
    }
}
