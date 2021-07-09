import { getRandomCatPics, getRandomCatGif } from './httpRequests.js';

export async function catPics(context) {
  const url = await getRandomCatPics();
  context.replyWithPhoto({ url });
}

export async function catGifs(context) {
  const url = await getRandomCatGif();
  context.replyWithAnimation({ url });
}
