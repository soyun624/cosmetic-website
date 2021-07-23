import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
  root: {
    background: 'linear-gradient(45deg, #f7ceae 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #gray',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));