import axiosBase from 'axios';
import linebot from 'linebot';

export const shortenerApi = axiosBase.create({
  baseURL: 'https://url-shortener-service.p.rapidapi.com',
  params: {}, // URLに含めるパラメータをjsonで指定する ⇒ {{url}}?type=test&q=search  など
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-key': process.env.xRapidapiKey,
    'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
  },
});

export const linebotApi = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});
