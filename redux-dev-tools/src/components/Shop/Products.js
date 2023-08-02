import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
          id='item1'
        />
        <ProductItem
          title='Test2'
          price={9}
          description='This is a second product - amazing!'
          id='item2'
        />
      </ul>
    </section>
  );
};

export default Products;
