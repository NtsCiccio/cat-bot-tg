
import { Telegraf, Markup, Context } from 'telegraf';
import dotenv from 'dotenv';
import { catPics, catGifs } from './utils/handlerResponse.js';
import { getButtons } from './utils/utils.js';

dotenv.config();

const token = process.env.BOT_TOKEN;
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!');
}

const bot = new Telegraf<Context>(token);

const keyboard = Markup.inlineKeyboard(getButtons());

bot.start((ctx) => {
  ctx.reply(
    "Hi 👋, my name is Chonkerino and i'm your personal bot 🤖\nMy job is provide you the best pictures/gif of cats 🐱\nBelow some useful commands",
    keyboard,
  );
});
bot.action('pics', (ctx) => catPics(ctx));
bot.command('pics', (ctx) => catPics(ctx));
bot.action('gif', (ctx) => catGifs(ctx));
bot.command('gif', (ctx) => catGifs(ctx));

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
