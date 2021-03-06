import React from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
// import white from '@material-ui/core/colors/white';
// import black from '@material-ui/core/colors/black';


const ButtonMUI = (props) => {
  const { onClick, children } = props;
  return (
  	<MuiThemeProvider theme={theme}>
  		<div className={props.classes.btn}>
  			<Button color='primary' >{props.title}</Button>
  		</div>
  	</MuiThemeProvider>	);
}

const styles={
  btn:{
    textAlign: 'center',
    marginTop:'50px'
  }
};

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#000000',
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

export default withStyles(styles)(ButtonMUI);
