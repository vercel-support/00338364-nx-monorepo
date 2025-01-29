import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    console.log('Hello from the GET method');
    return res.status(200).json({ message: 'Hello from the GET method' });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
