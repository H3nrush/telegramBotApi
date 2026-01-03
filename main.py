import telebot
 
bot = telebot.TeleBot('8257548623:AAHz971lXYa0QlMu4dKhs7kkV6GETzmYvu4')

@bot.message_handler(commands=['start'])
def welcome(message):
    bot.send_message(message.chat.id, 'wlcome to h3nrush.')

bot.polling()