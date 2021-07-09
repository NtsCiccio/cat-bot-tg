import { Markup } from 'telegraf';
import { AxiosResponse } from 'axios'
import { InlineKeyboardButton } from 'telegraf/typings/core/types/typegram';

export function getButtons(): InlineKeyboardButton[] {
  return [Markup.button.callback('random cat(pics)', 'pics'), Markup.button.callback('random cat(gif)', 'gif')];
}

export function createApiUrl(baseUrl: string, type?: string): string{
  if (!type) return baseUrl.concat('?json=true');
  return baseUrl.concat(`/${type}`).concat('?json=true');
}

export function createResponseUrl(baseUrl: string, response: AxiosResponse): string {
  return baseUrl.concat(`/${response.data.id}`);

}
