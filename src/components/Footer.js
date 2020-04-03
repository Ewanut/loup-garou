import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';


const Footer = (props) => {
  const { onClick, children } = props;
  return (
  	<MuiThemeProvider theme={theme}>
  		<div>
  			<footer className={props.classes.footer}>
  				<h1 className={props.classes.titre}>Check mon Portfolio => <a href='https://www.ewanguilleret.fr/' className={props.classes.a}>Ewan Guilleret</a></h1>
  			</footer>
  		</div>
  	</MuiThemeProvider>	);
}

const styles={
  footer:{
    backgroundColor: "brown",
    padding:'20px',
    textAlign: 'center',
    color : 'white',
    position: 'absolute',
    bottom: '0%',
    width: 'calc(100% - 40px)',
  },
  titre:{
  	margin: 0
  },
  a:{
    textDecoration:'none',
    color:'black'
  }
};

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#FFFFFF',
    },
  },
  typography : {
    fontSize: 25,
    fontFamily:'Montserrat',
  },
  overrides:{
    MuiButton:{
      root:{
        backgroundColor: "brown",
        "&:hover":{backgroundColor: "white"}
      }
    }
  }
});

export default withStyles(styles)(Footer);