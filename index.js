const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const {math} = require("./math.js");


//session
const fs = require('fs');
const { stringify } = require('querystring');
const SESSION_FILE_PATH = './session/session.json';

//load session files
let sessionData;



if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH)
}else{
    client.on('qr', qr => {
        qrcode.generate(qr, {small: true});
    })
}
const client = new Client({
    session: sessionData
});

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
    var msg = message.body.toLowerCase().split(" ") //formating command string
    var prefix = '!'
    console.log(message.from, msg, "\"n", MessageChannel)

    // ==== commandList Dict ====
    const commandList = {
        'ping': 'pong!',
        'math': math.math(msg) ? msg[0].startsWith(prefix + 'math') : '' 
    }
    console.log(message.author)
    console.error(message.body)
    // =========== console consolem message =================
    // console.log(`{message.author}: {msg}`)
    // console.log(`{message.author}: {message.body}`)


    // ================ Message in dict =================
    // if (bool(commandList[msg[0].subString(1)])){
    //     console.log(`Command from message.user`)
    //     client.sendMessage(`{message.from} {commandList[msg[0]]}`);
    // } 

    // if (message.body == "hello"){
    //     message.reply("hello")
    //     client.sendMessage(MessageChannel, msg)
    // }

})
// ============End Bot=========================""



client.initialize();