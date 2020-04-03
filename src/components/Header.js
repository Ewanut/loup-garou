import React from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';


const Header = (props) => {
  const { onClick, children } = props;
  return (
  	<MuiThemeProvider theme={theme}>
  		<div>
  			<header className={props.classes.header}>
  				<h1 className={props.classes.titre}>Bienvenue sur le jeu du Loup-Garou en ligne !</h1>
  			</header>
  		</div>
  	</MuiThemeProvider>	);
}

const styles={
  header:{
    backgroundColor: "brown",
    padding:'20px',
    textAlign: 'center',
    color : 'white',
  },
  titre:{
  	margin: 0
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

export default withStyles(styles)(Header);