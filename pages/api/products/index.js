import Product from '../../../models/Product';
import db from '../../../utils/db';

export default async function handler(req, res) {
  await db.connect();
  if (req.method === 'GET') {
    const products = await Product.find();
    await db.connect();
    return res.json(products);
  }
}
