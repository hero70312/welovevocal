"use strict";

const axios = require('axios');
const slackConfig = require("../constants/constant").slack;

const slack_url = slackConfig.slackEndpoint;
const bot_token = slackConfig.botToken;

// 參考資料 : https://api.slack.com/methods/chat.postMessage
const slackUtil = {
    postMessage: async function ({text = 'slack api test',channel='', attachments}) {
        // attachments : [{"pretext": "pre-hello", "text": "text-world"}]
        const data = {
            channel,
            text,
            username: 'testing bot'
        };

        const config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${bot_token}`,
            }
        };

        const response = await axios.post(slack_url, data, config);
        if (response.status === 200) {
            // 在此確認是否成功送訊息給 slack
            if (response.data.ok === true) return response.data;
            else throw response;
        } else {
            throw response;
        }

        /*************************   sample response  ***********************
         {
            "ok": true,
            "channel": "C93DE254K",
            "ts": "1529490236.000226",
            "message": {
                "text": "slack-api test",
                "username": "Slack API Tester",
                "bot_id": "BBA37LK7A",
                "type": "message",
                "subtype": "bot_message",
                "ts": "1529490236.000226"
            }
         }
         *******************************************************************/
    }
};

module.exports = slackUtil;
