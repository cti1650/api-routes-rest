export default (req, res) => {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case 'GET':
      res.statusCode = 200;
      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
      res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
      res.end('testテスト');
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
