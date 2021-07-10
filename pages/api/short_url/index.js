import { shortenerApi } from '@util/api';

export default async (req, res) => {
  const {
    query: { url },
    method,
  } = req;
  let fullUrl = url || 'https://google.com/';
  switch (method) {
    case 'GET':
      await shortenerApi
        .post('/shorten', { url: fullUrl })
        .then((responseData) => {
          console.log(responseData.data);
          res.status(200).json({
            base_url: fullUrl,
            short_url: responseData.data.result_url || '',
          });
        })
        .catch((err) => {
          res.status(400).json({ error: err });
        });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
