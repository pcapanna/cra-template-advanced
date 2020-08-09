import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import {useIsLoadingProducts, useLoadProducts, useProducts} from "../hooks";
import ProductPreview from "./ProductPreview";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    feed: {
      flexGrow: 1,
      padding: theme.spacing(0, 2),
    },
  }),
);

const ProductFeed = (props) => {

  const classes = useStyles();

  const loadProducts = useLoadProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  const products = useProducts();
  const isLoadingProducts = useIsLoadingProducts();

  const header = isLoadingProducts
    ? "Loading products.."
    : (products.length === 0
      ? "No Products available"
      : "Products lodaded");

  return (
    <>
      <Box m={1}/>
      <span>{header}</span>
      <Box m={1}/>
      <div className={classes.feed} {...props}>
        {products.map((product) => (
          <ProductPreview key={product.id} product={product}/>
        ))}
      </div>
    </>
  );
};

export default ProductFeed;
