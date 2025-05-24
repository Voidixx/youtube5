import { CONFIG } from './config.js';

let nextPageToken = '';

async function fetchChatMessages() {
    const url = `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${CONFIG.liveChatId}&part=snippet,authorDetails&key=${CONFIG.apiKey}${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`;

    const res = await fetch(url);
    const data = await res.json();

    nextPageToken = data.nextPageToken;

    data.items.forEach(msg => {
        const text = msg.snippet.displayMessage;
        handleChatCommand(text.toLowerCase());
    });

    // Repeat every few seconds
    setTimeout(fetchChatMessages, 3000);
}

fetchChatMessages();