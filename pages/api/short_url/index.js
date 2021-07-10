import axiosBase from 'axios';

const options = {
  method: 'POST',
  baseURL: 'https://url-shortener-service.p.rapidapi.com',
  params: {}, // URLに含めるパラメータをjsonで指定する ⇒ {{url}}?type=test&q=search  など
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-key': '615382a66cmsh7486328bbe27550p1f746ajsna3df67c5d34b',
    'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
  },
};
const axios = axiosBase.create(options);

export default async (req, res) => {
  await axios
    .post('/shorten', { url: 'https://google.com/' })
    .then((responseData) => {
      console.log(responseData.data);
      res.statusCode = 200;
      res.json(responseData.data);
    })
    .catch((err) => {
      res.statusCode = 400;
      res.json({ error: err });
    });
};
