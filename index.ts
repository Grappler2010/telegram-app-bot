import TelegramBot from 'node-telegram-bot-api';

const token = '7491215529:AAFr0qZ07D7HNCNQ1mJ9Djlr5DnGDjeHtWU';

const bot = new TelegramBot(token, {polling: true});
const webAppUrl = "https://classy-kleicha-07875d.netlify.app";

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Приложение', {
      reply_markup: {
        inline_keyboard: [
          [{text: "Открыть", web_app: {url: webAppUrl}}]
        ]
      }
    });
  }
});
