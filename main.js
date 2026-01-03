require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  console.log(msg);
  bot.sendMessage(msg.chat.id, 'Hello ' + msg.chat.first_name + '! ' + 'Bot is running for You🚀');
});

bot.on('message' , msg=>{
    console.log(msg)
    if(msg.text == 'Hello'){
        bot.sendPhoto(msg.chat.id , 'AgACAgQAAxkBAAMbaVlAGXcfTd4_dfnE5o5bf_6c0rcAAkcMaxvpSchSzkx212zOFXoBAAMCAAN4AAM4BA')
    }
})

console.log('bot is running...');
