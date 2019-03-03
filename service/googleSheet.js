'use strict';

const {google} = require('googleapis');
const googleSheetConfig = require('../constants/constant').google_sheet;

function getOauth2Client() {
    const oauth2Client = new google.auth.OAuth2(
        googleSheetConfig.client_id,
        googleSheetConfig.client_secret,
        googleSheetConfig.redirect_uris[0]
    );

    oauth2Client.setCredentials(googleSheetConfig.token);
    return oauth2Client;
}

const oauth2Client = getOauth2Client();

class GoogleSheetService {

    async getSheetData({spreadsheetId, range}) {
        return new Promise(function (resolve, reject) {
            const sheets = google.sheets({version: 'v4', auth: oauth2Client});
            sheets.spreadsheets.values.get({
                    spreadsheetId: spreadsheetId,
                    range: range,
                }, (err, res) => {
                    if (err) {
                        return reject(err);
                    } else {
                        return resolve(res.data.values);
                    }
                }
            );
        });
    }

}

module.exports = GoogleSheetService;

