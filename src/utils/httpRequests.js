import axios from 'axios';
import dotenv from 'dotenv';
import { createApiUrl, createResponseUrl } from './utils.js';

dotenv.config();

const api = process.env.API;

export function getRandomCatPics() {
  return axios
    .get(createApiUrl(api))
    .then((response) => createResponseUrl(api, response))
    .catch(() => ':( no cats for you, sorry');
}

export function getRandomCatGif() {
  return axios
    .get(createApiUrl(api, 'gif'))
    .then((response) => createResponseUrl(api, response))
    .catch(() => ':( no cats for you, sorry');
}
