import React, { useEffect, useState } from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Snackbar } from '@material-ui/core';
import NewsletterItem from './newsletter-item';
import SubscribeForm from './subscribe-form';
import List from '@material-ui/core/List';

const sitespeedStyles = createMuiTheme({
  palette: {
    primary: {
      light: '#4b81a0',
      main: '#155571',
      dark: '#002c46',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff9f7c',
      main: '#e36f4f',
      dark: '#ac4025',
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f5'
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined'
    }
  },
  title: {
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none'
  }
});

export function NewsletterList(props) {
  return (
    <List>
      {props.newsletters.map((n) =>
        <NewsletterItem item={n} />
      )}
      <SubscribeForm />
    </List>
  );
}

export default NewsletterList;
