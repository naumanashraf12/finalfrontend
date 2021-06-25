import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import productService from "./../../services/ProductsService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

const NewProduct = (props) => {
  const [teamOne, setTeamOne] = React.useState("");
  const [teamTwo, setTeamTwo] = React.useState("");
  const [date, setDate] = React.useState("2020-8-11");
  const [city, setCity] = React.useState("ABU DAbi");
  const notify = () => toast("Wow so easy!");
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add A NEW Match</h1>
        <ToastContainer />
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <FormControl component="fieldset">
          <FormLabel component="legend">First Team</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            onChange={(e) => {
              setTeamOne(e.target.value);
            }}
          >
            <FormControlLabel
              value="multan "
              control={<Radio color="primary" />}
              label="multan"
              labelPlacement="start"
            />
            <FormControlLabel
              value="lahore"
              control={<Radio color="primary" />}
              label="lahore"
              labelPlacement="start"
            />
            <FormControlLabel
              value="karachi"
              control={<Radio color="primary" />}
              label="karachi"
              labelPlacement="start"
            />
            <FormControlLabel
              value="islamabad"
              control={<Radio color="primary" />}
              label="islamabad"
              labelPlacement="start"
            />
            <FormControlLabel
              value="quetta"
              control={<Radio color="primary" />}
              label="quetta"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Second Team</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            onChange={(e) => {
              setTeamTwo(e.target.value);
            }}
          >
            <FormControlLabel
              value="multan "
              control={<Radio color="primary" />}
              label="multan"
              labelPlacement="start"
            />
            <FormControlLabel
              value="lahore"
              control={<Radio color="primary" />}
              label="lahore"
              labelPlacement="start"
            />
            <FormControlLabel
              value="karachi"
              control={<Radio color="primary" />}
              label="karachi"
              labelPlacement="start"
            />
            <FormControlLabel
              value="islamabad"
              control={<Radio color="primary" />}
              label="islamabad"
              labelPlacement="start"
            />
            <FormControlLabel
              value="quetta"
              control={<Radio color="primary" />}
              label="quetta"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <TextField
          label="date"
          width="50%"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <TextField
          label="city"
          width="50%"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            {
              teamOne == teamTwo
                ? toast("SAME TEAMS CANT PLAY SAME TEAM DUMB")
                : productService
                    .addProduct({ teamOne, teamTwo, date, city })
                    .then((data) => {
                      console.log(data);
                      props.history.push("/products");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
            }
          }}
        >
          Add New
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewProduct;
