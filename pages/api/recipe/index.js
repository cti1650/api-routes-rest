import axiosBase from 'axios';

export default async (req, res) => {
  const options = {
    method: 'POST',
    baseURL: 'https://url-shortener-service.p.rapidapi.com',
    params: {}, // URLに含めるパラメータをjsonで指定する ⇒ {{url}}?type=test&q=search  など
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-key': process.env.xRapidapiKey,
      'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
    },
  };
  const axios = axiosBase.create(options);
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
