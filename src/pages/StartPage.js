import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'


const Start = (props) => {
  const { user } = useSession();
  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <Button color="primary" className={props.classes.myLeftButton}><Link className="Link" to="/create" onClick={() => createGame(user)}> Nouvelle partie
      </Link></Button>
      <br />
      <Button color="secondary"><Link className="Link" to="/join">
        Rejoindre une partie
      </Link></Button>
    </div>
    </MuiThemeProvider>
  );
}

const styles={
  myLeftButton:{
    backgroundColor: "blue"
  }
};

const theme = createMuiTheme({
  palette:{
    primary: blue,
    secondary: red,
  },
  typography : {
    fontSize: 25,
    fontFamily:'Montserrat',
  },
  overrides:{
    MuiButton:{
      root:{
        backgroundColor: "red",
        "&:hover":{backgroundColor: "yellow"}
      }
    }
  }
});

export default withStyles(styles)(Start);
