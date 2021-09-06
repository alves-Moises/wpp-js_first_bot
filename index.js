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
    console.log(msg)
    var commandList = {
        'ping': 'pong!',
        'math': math.math(msg.substring(6)) ? msg.substring(1).startsWith(prefix + 'math') : '' 
    }
    
    console.log(`{message.author}: {msg}`)
    console.log(`{message.author}: {message.body}`)


    // ================ Message in dict =================
    if (msg.substring(1).split(" "[0]) in commandList){
        console.log(`Command from message.user`)
        client.sendMessage(message.from, commandList[msg[0]]);
    } 

   if(messageLower.body == 'ping') {
    message.reply('pong!')
   }


})
// ============End Bot=========================



client.initialize();