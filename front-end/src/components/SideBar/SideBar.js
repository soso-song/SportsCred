import React from "react";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  makeStyles,
  Box
} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color: 'white',
    backgroundColor: '#00000060',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function SideBar(props) {
  const { children: component } = props;
  const {page} = props;
  const classes = useStyles();

  let history = useHistory();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        
        <ListItem button key={"OpenCourt"} onClick = {() => history.push("/openCourt")}>
          <ListItemIcon>
            <SportsBasketballIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Open Court" />
        </ListItem>

        <ListItem button key={"OpenCourt"} onClick = {() => history.push("/profile")}>
          <ListItemIcon>
            <SportsBasketballIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem button key={"OpenCourt"} onClick = {() => history.push("/trivia")}>
          <ListItemIcon>
            <SportsBasketballIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Trivia" />
        </ListItem>

      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {page}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </nav>
      <main className={classes.content}>
        {component}
      </main>
    </div>
  );
}

export default SideBar;
