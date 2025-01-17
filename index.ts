import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

const token = process.env.TELEGRAM_BOT_TOKEN!;

const bot = new TelegramBot(token, {polling: true});
const webAppUrl = "https://telegram-app-production-7f3a.up.railway.app";

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
