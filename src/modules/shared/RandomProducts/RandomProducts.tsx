import { useEffect, useState } from 'react';
import { Product } from '../../../types/Product';
import { ProductsSlider } from '../../HomePage/componets/ProductsSlider';
import { getApiUrl } from '../../../utils/apiUrl';

const getRandomProducts = (products: Product[]): Product[] => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());

  return shuffled.slice(0);
};

export const RandomProducts = () => {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(getApiUrl('api/products.json'))
      .then(res => res.json())
      .then((products: Product[]) => {
        setRandomProducts(getRandomProducts(products));
      });
  }, []);

  return <ProductsSlider title="You may also like" products={randomProducts} />;
};
