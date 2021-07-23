import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #b9b497 30%, #7c8163 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #gray',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    background: 'linear-gradient(45deg, #f7ceae 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #gray',
    color: 'white',
    height: 48,
    padding: '0 30px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));