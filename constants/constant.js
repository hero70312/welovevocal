const config = {
    apiUrl: "localhost:3000",
    google_drive: {
        "client_id": "609860571210-haojiiq1eidohk94d8unilsuea604e5b.apps.googleusercontent.com",
        "project_id": "vocalteam-1545907132148",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://www.googleapis.com/oauth2/v3/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": "0wNV_T1pYnoVobsTUFo6q2UM",
        "redirect_uris": [
            "urn:ietf:wg:oauth:2.0:oob",
            "http://localhost"
        ],
        "token": {
            "access_token": "ya29.Glt_BrkUMqKEnN6aUNp6HBb4PPcVJ0dkUAkXMR9YoRWPIlzTkZYLjtmis32y2CBCVkLijHiVfzZvCPgfNWA_GGuA3COYncf3p9aiyzeZSjwZ80ILtQwD47wdSIpu",
            "refresh_token": "1/xP9N2_apoXwkz5eqFPhopvPBnGadC-9QScsB5fHb6LY",
            "scope": "https://www.googleapis.com/auth/drive",
            "token_type": "Bearer",
            "expiry_date": 1545916489751
        },
    },
    google_sheet: {
        "client_id": "609860571210-egji9lptf7cj63375s364hivpfaa3gj3.apps.googleusercontent.com",
        "project_id": "vocalteam-1545907132148",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": "UQx49OPYDdzLlIEVEeSayEfK",
        "redirect_uris": [
            "urn:ietf:wg:oauth:2.0:oob",
            "http://localhost"
        ],
        "token": {
            "access_token": "ya29.GlvBBuSUom1bd9TuyB9FUJkfzcz7rZKXN-0Oggf5zZiE4OCBYzCgHaynvDdY84BebS8fia6e6gO1SAx8LHQdu6l8YOZOuuwHpUzllDwuDIDVQgeYtGkZIF7cPX6D",
            "refresh_token": "1/T84WSCZ7pCn5mCmpHgutLl_76RX0nNnxb7uwPi3o4rU",
            "scope": "https://www.googleapis.com/auth/spreadsheets",
            "token_type": "Bearer",
            "expiry_date": 1551618046266
        }
    },
    songNames:{
        range:"song!A2:A",
        spreadsheetId:"1gTTyBC7741koyWoHaFwpp3LBT5r-iWbhge4blVxY_HA"
    },
    line: {
        channelAccessToken: 'gOMQj8Pnd70xqcnXf8vLXngiGiDjTYRD/E4yVVGFKNdw7NuTL8r5e5PE52OoopXW+AXo3ikuiAOZlbhX0Ho3jB3V6OjN17XwpNrvcwV9xZvAINwrSTXFXYL0j02ri6eABydyMDuqxub4b3GUCshcBQdB04t89/1O/w1cDnyilFU=',
        channelSecret: '240565389320d52d465935a8d45759f3',
    },
    slack: {
        slackEndpoint: 'https://slack.com/api/chat.postMessage',
        channel: 'CF5RMMK88'
    },
};

module.exports = config;
