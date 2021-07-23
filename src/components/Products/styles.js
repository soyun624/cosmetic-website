import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  header: {
    flexGrow: 1,
    width: '100vw',
    height:'200px',
    marginBottom: '30px',
    [theme.breakpoints.up(500 + theme.spacing(3) * 2)]: {
      height:'300px',
    },
    [theme.breakpoints.up(1000 + theme.spacing(3) * 2)]: {
      height:'470px',
    },
    [theme.breakpoints.up(2000 + theme.spacing(3) * 2)]: {
      height:'530px',
    },


  }
}));