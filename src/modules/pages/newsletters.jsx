import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import NewsletterList from '../../components/newsletter-list';
const api = require('../../services/api');

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
    width: '100%',
    height: '100%',
    'line-height': '30px',
    'font-size': '50px',
    'text-align': 'center',
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none'
  }
});

export function Newsletter(props) {
  const [newsletters, setNewsletters] = useState([]);
  const fetch = async () => {
    try {
      const list = await api.getList();
      setNewsletters(list);
    } catch (e) {
      alert(e);
    }
  };
  fetch();
  return (
    <Paper elevation={3}>
      <Typography align="center" variant="h2"> Newsletters </Typography>
      <Typography align="center"> Select all the newsletters you'd like to receive </Typography>
      <NewsletterList newsletters={newsletters}/>
    </Paper>
  )
}

export default Newsletter;
/*

*/
