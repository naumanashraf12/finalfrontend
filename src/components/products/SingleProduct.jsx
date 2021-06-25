import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={4}>
      <h2>{product.teamOne}</h2>
      <h2>VS</h2>
      <h2>{product.teamTwo}</h2>
      <h2>{product.date}</h2>
      <h2>{product.city}</h2>
      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
