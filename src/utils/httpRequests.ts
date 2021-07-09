import axios from 'axios';
import dotenv from 'dotenv';
import { createApiUrl, createResponseUrl } from './utils.js';

dotenv.config();

const api = process.env.API!;

export async function getRandomCatPics(): Promise<string> {
  try {
    const response = await axios
      .get(createApiUrl(api));
    return createResponseUrl(api, response);
  } catch (e) {
    return ':( no cats for you, sorry';
  }
}

export async function getRandomCatGif(): Promise<string>  {
  try {
    const response = await axios
      .get(createApiUrl(api, 'gif'));
    return createResponseUrl(api, response);
  } catch (e) {
    return ':( no cats for you, sorry';
  }
}
