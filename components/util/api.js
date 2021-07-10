import axiosBase from 'axios';

export const shortenerApi = axiosBase.create({
  method: 'POST',
  baseURL: 'https://url-shortener-service.p.rapidapi.com',
  params: {}, // URLに含めるパラメータをjsonで指定する ⇒ {{url}}?type=test&q=search  など
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-key': '615382a66cmsh7486328bbe27550p1f746ajsna3df67c5d34b',
    'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
  },
});
