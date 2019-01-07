'use strict';

const router = require('express').Router();
const GoogleDriveService = require("../service/googleDrive");
const slackConfig = require("../constants/constant").slack;
const slackUtil = require("../utils/slackUtil");
const { WebClient } = require('@slack/client');

const errorWrapper = require('../utils/errorWrapper');

router.get('/', async (req, res) => {
    res.redirect('/index.html');
});

router.post('/', errorWrapper(async (req, res) => {

    const {userName, audioFileBase64, audioFileFileName, fileFormat, songName, worshipDate} = req.body;

    const {sharedUrl: url} = await new GoogleDriveService().uploadFile({
        fileName: audioFileFileName,
        fileBase64: audioFileBase64,
        userName: userName,
        fileFormat,
        songName,
        worshipDate
    });


    // const token = 'xoxp-517965447158-516563710610-518641517223-79e50ade4b3e5f9efd3cde72a59e8550';
    // const web = new WebClient(token);
    // const conversationId = "CF5RMMK88";
    let message = "";
    message += `*${userName}* 上傳了 *${songName}* 錄音檔囉!`;
    // web.chat.postMessage({ channel: conversationId, text: message, mrkdwn:true,  attachments: [
    //         {
    //             "fallback": "ReferenceError - UI is not defined: https://honeybadger.io/path/to/event/",
    //             "text": "<https://drive.google.com/open?id=1ReBbwE1PeI_ufqpe5WFaRDgpMkHaOf18|前往雲端硬碟>",
    //             "thumb_url": "https://res.cloudinary.com/uecare/image/upload/c_scale,w_235/v1546617752/systemUse/1000px-Googledrive_logo.svg_.png",
    //             "footer": "WeLoveVocal",
    //             "footer_icon": "https://res.cloudinary.com/dh62scrmq/image/upload/v1546251887/sys/micnew.png",
    //             "color": "#009df3"
    //         }
    //     ] })
    //     .then((res) => {
    //         console.log('Message sent: ', res.ts);
    //     })
    //     .catch(console.error);

    let a = await slackUtil.postMessage({text: message,channel: slackConfig.channel});

    res.json({url});

}));

module.exports = router;
