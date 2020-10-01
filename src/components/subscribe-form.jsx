import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
const api = require('../services/api');

export function SubscribeForm(props) {

  const submit = async () => {
    await api.updateList();
  };
  return (
    <FormControl>
      <TextField id="email" label="Enter email" variant="outlined" />
      <Button variant="contained" color="primary" onClick={submit}>
        SUBSCRIBE
      </Button>
      <FormControlLabel
        control={  <Checkbox id="subscribe" label="blah"/>}
        label="I do not want to receive information about future newsletters"
      />
    </FormControl>
  );
}
export default SubscribeForm;
