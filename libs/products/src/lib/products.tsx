import styles from './products.module.css';
import { Button } from '@ashanfernando/bit-with-nx.ui.button';

/* eslint-disable-next-line */
export interface ProductsProps {}

export function Products(props: ProductsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
      <Button>Add Products</Button>
    </div>
  );
}

export default Products;
