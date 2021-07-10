import { shortenerApi } from '@util/api';

export default async (req, res) => {
  await shortenerApi
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
