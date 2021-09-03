const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const {math} = require("./math.js")


//session
const fs = require('fs');
const SESSION_FILE_PATH = './session/session.json';

//load session files
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH)
}

const client = new Client({
    session: sessionData
});
// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

//saving autenticated session
client.on('authenticated', (session)=>{
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) =>{
        if (err){
            console.err(`err: {err}`)
        }
    })

})

client.on('ready', () => {
    console.log('Client is ready!');
});



// ========== bot Begin ================
client.on('message', message => {
    let msg = message.body.toLowerCase().trim()
    var prefix = '!'

    commandList = {
        'ping': 'pong!' ? msg == prefix + 'ping': '',
        'math': math.math(a, b, signal) ? msg.startSwith(prefix + 'math'): '' 
    }

   if(messageLower.body == 'ping') {
    message.reply('pong!')
   }


})
// ============End Bot=========================



client.initialize();