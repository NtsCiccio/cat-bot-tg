import { Context } from 'telegraf';
import { getRandomCatPics, getRandomCatGif } from './httpRequests.js';

export async function catPics(context: Context) {
  const url = await getRandomCatPics();
  context.replyWithPhoto({ url });
}

export async function catGifs(context: Context) {
  const url = await getRandomCatGif();
  context.replyWithAnimation({ url });
}
