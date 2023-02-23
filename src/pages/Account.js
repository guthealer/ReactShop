import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import EmailIcon from '@mui/icons-material/Email';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Container } from '@mui/material';

export default function Account(props) {

  function logout(){
    localStorage.clear();
    window.location.reload(false)
  }
  return (

    <Container sx={{display:'flex',justifyContent:'center'}}>
    <List sx={{ width: '100%', maxWidth: 400, bgcolor:'' }}>
      <ListItem>

        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
         

        <ListItemText primary="Name" secondary={props.firstName+" "+props.lastName} />

      </ListItem>



      <ListItem>
      
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
      
        <ListItemText primary="Email" secondary={props.email} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ShoppingBagIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Orders" secondary="" />
      </ListItem>


      <ListItem>
       
        <ListItemAvatar>
          <Avatar>
            <LogoutIcon />
          </Avatar>
        </ListItemAvatar>
        
        <ListItemText primary={<Button>logout</Button>} secondary="" onClick={logout}/>
      
      </ListItem>
{/* 
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ShoppingBagIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Orders" secondary="J" />
      </ListItem> */}
    </List>
    </Container>
  );
}