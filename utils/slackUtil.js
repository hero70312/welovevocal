"use strict";

const axios = require('axios');
const slackConfig = require("../constants/constant").slack;

const slack_url = slackConfig.slackEndpoint;
const bot_token = slackConfig.botToken;

// 參考資料 : https://api.slack.com/methods/chat.postMessage
const slackUtil = {
    postMessage: async function ({ text = 'slack api test', channel=''}) {
        // attachments : [{"pretext": "pre-hello", "text": "text-world"}]
        const data = {
            channel,
            text,
            mrkdwn: true,
            username: 'vocal-bot',
            attachments: [
                {
                    "fallback": "ReferenceError - UI is not defined: https://honeybadger.io/path/to/event/",
                    "text": "<https://drive.google.com/open?id=1ReBbwE1PeI_ufqpe5WFaRDgpMkHaOf18|前往雲端硬碟>",
                    "thumb_url": "https://res.cloudinary.com/uecare/image/upload/c_scale,w_235/v1546617752/systemUse/1000px-Googledrive_logo.svg_.png",
                    "footer": "WeLoveVocal",
                    "footer_icon": "https://res.cloudinary.com/dh62scrmq/image/upload/v1546251887/sys/micnew.png",
                    "color": "#009df3"
                }
            ]
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
    }
};

module.exports = slackUtil;
