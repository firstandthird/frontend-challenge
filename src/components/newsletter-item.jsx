import React, { useEffect, useState } from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Snackbar } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
}));

export function NewsletterItem(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(props.item.selected ? <CircleChecked /> : <CircleCheckedFilled />);
  const update = (evt, value) => {
    props.item.selected = value;
    alert(`You've ${props.
      item.selected ? 'selected' : 'unselected'} an item`);
  };
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className="classes.large" variant="square" alt="{props.item.title}" src={props.item.imageSrc}/>
      </ListItemAvatar>
      <ListItemText
        primary={props.item.title}
        secondary={props.item.description}>
      </ListItemText>
      <Checkbox
        icon={<CircleUnchecked />}
        checkedIcon={checked}
        onChange={(evt, value) => update(evt, value)}
      />
    </ListItem>
  );
}

export default NewsletterItem;
