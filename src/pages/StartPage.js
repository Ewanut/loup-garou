import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import Button from '@material-ui/core/Button';
import ButtonMUI from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Start = (props) => {
  const { user } = useSession();
  return ( 
    <div>
    <Header/>
      <ButtonMUI color="main" title='Nouvelle partie'><Link className="Link" to="/create"  onClick={() => createGame(user)}> Nouvelle partie
      </Link></ButtonMUI>
      <br />
      <ButtonMUI title='Rejoindre une partie'><Link className="Link" to="/join">
        Rejoindre une partie
      </Link></ButtonMUI> 
      <Footer/>
    </div>
  );
}

export default Start;
