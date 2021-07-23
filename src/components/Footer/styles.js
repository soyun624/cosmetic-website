import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    bigFooter: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '3rem',
        textAlign: 'center'
        
    
      },
      footer : {
          backgroundColor: "#b9b497",
          display: "block",
          bottom: 0,
          paddingTop: "2rem",
          paddingBottom: "2rem",
          width: "100%",
          color: "white",
          

      },

 
  anchor: {
  	textDecoration: "none",
  	color: "white",
  	underline: "none",
  },


}));