import { Markup } from 'telegraf';

export function getButtons() {
  return [Markup.button.callback('random cat(pics)', 'pics'), Markup.button.callback('random cat(gif)', 'gif')];
}

export function createApiUrl(baseUrl, type) {
  if (!type) return baseUrl.concat('?json=true');
  return baseUrl.concat(`/${type}`).concat('?json=true');
}

export function createResponseUrl(baseUrl, response) {
  return baseUrl.concat(`/${response.data.id}`);
}
