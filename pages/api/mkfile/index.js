import axios from 'axios';

export default async (req, res) => {
  const {
    query: { type },
    method,
  } = req;
  console.log(type);
  switch (method) {
    case 'GET':
      switch (type) {
        case 'text':
          res.setHeader(
            'Cache-Control',
            's-maxage=86400, stale-while-revalidate'
          );
          res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
          res.end('testテスト');
          break;
        case 'csv':
          res.setHeader(
            'Content-Disposition',
            'attachment; filename="example.csv"'
          );
          res.setHeader('Content-Type', 'text/csv;charset=UTF-8');
          res.end(['テスト１,ok', 'テスト２,ok'].join('\n'), 'utf-8');
          break;
        case 'link':
          res.statusCode = 302;
          res.setHeader('Location', 'https://google.com');
          '';
          res.end();
          break;
        case 'pdf':
          res.statusCode = 302;
          res.setHeader(
            'Location',
            'https://cio.go.jp/sites/default/files/uploads/documents/1020_api_tecnical_guidebook.pdf'
          );
          res.end();
          break;
        default:
          res.setHeader(
            'Cache-Control',
            's-maxage=86400, stale-while-revalidate'
          );
          res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
          res.end('testテスト');
          break;
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
