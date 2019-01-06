const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
const token = 'xoxb-517965447158-516568923570-GsR2Xue5V6xzoc63b2YEGGzZ';

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'CF5RMMK88';

// See: https://api.slack.com/methods/chat.postMessage
web.chat.postMessage({ channel: conversationId, text: 'Hello there' })
    .then((res) => {
        // `res` contains information about the posted message
        console.log('Message sent: ', res.ts);
    })
    .catch(console.error);
