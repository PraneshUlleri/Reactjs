import { products } from './constants/data.js';
import Product from './modal/product-modal.js';

const DefaultData = async () => {
  try {
    // await Product.deleteMany({});
    await Product.insertMany(products).then(console.log('added '));
  } catch (error) {
    console.log('Error while inserting default data ' + error);
  }
};
export default DefaultData;
