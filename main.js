const messageContainer = document.getElementById('messageContainer');

const messages = [
    { text: "heyo 👋", type: "left" },
    { text: "i'm jonny", type: "left" },
    { image: "/johnnystorms.jpg", type: "left" },
    { text: "i created a men's self development mentorship program.", type: "left" },
    { text: "went from 217 lbs to 150 in 7 months...", type: "left" },
    { text: "started two ditigal brands...", type: "left" },
    { text: "and became a model", type: "left" },
    { text: "peace out... jonnystorms 👀", type: "left" },

];

function createTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    return indicator;
}

function createMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${message.type}`;
    
    if (message.text) {
        messageElement.textContent = message.text;
    } else if (message.image) {
        const img = document.createElement('img');
        img.src = message.image;
        messageElement.appendChild(img);
    }
    
    return messageElement;
}

async function displayMessages() {
    for (const message of messages) {
        const typingIndicator = createTypingIndicator();
        messageContainer.appendChild(typingIndicator);
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        messageContainer.removeChild(typingIndicator);
        
        const messageElement = createMessage(message);
        messageContainer.appendChild(messageElement);
        
        await new Promise(resolve => setTimeout(resolve, 100));
        messageElement.classList.add('show');
        
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

displayMessages();