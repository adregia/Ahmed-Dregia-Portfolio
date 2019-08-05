import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Typography,
  Grid,
  Container,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Divider
} from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import MenuRounded from '@material-ui/icons/MenuRounded';

// Style object
const NavBarStyle = theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    height: '400px',
    top: '0',
    background:
      'linear-gradient(to bottom, ' +
      theme.palette.primary.main +
      ', ' +
      theme.palette.secondary.main +
      ')',
    zIndex: '-1'
  },
  navLink: {
    position: 'relative',
    color: '#FFF',
    textDecoration: 'none',
    zIndex: '2'
  },
  activeNavLink: {
    color: '#000',
    textDecoration: 'underline'
  },
  menu: {
    width: '300px'
  },
  menuItem: {
    textDecoration: 'none'
  },
  menuButton: {
    color: '#FFF'
  }
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { classes } = this.props;
    // Active NavLink style
    const activeStyle = {
      textDecoration: 'underline'
    };

    const routes = [
      { text: 'ABOUT', to: '/', exact: true },
      { text: 'EXPERIENCE', to: '/experience', exact: false },
      { text: 'PORTFOLIO', to: '/portfolio', exact: false },
      { text: 'FIND ME', to: '/find_me', exact: false }
    ];

    return (
      <Fragment>
        <Box className={classes.root} />
        <Container>
          <Box display={{ xs: 'block', sm: 'none' }}>
            <IconButton onClick={this.handleMenu}>
              <MenuRounded className={classes.menuButton} />
            </IconButton>
          </Box>
          <Drawer open={this.state.menuOpen} onClose={this.handleMenu}>
            <div className={classes.menu}>
              <List>
                {routes.map((item, index) => (
                  <Fragment key={index}>
                    <NavLink
                      exact={item.exact}
                      to={item.to}
                      className={classes.menuItem}
                      activeStyle={activeStyle}
                    >
                      <ListItem button onClick={this.handleMenu}>
                        <Typography variant="subtitle1">{item.text}</Typography>
                      </ListItem>
                    </NavLink>
                    <Divider />
                  </Fragment>
                ))}
              </List>
            </div>
          </Drawer>
          <Box display={{ xs: 'none', sm: 'block' }}>
            <Grid container direction="row" spacing={3} justify="flex-end">
              {routes.map((item, index) => (
                <Grid item key={index}>
                  <NavLink
                    className={classes.navLink}
                    activeStyle={activeStyle}
                    exact={item.exact}
                    to={item.to}
                  >
                    <Typography variant="subtitle1">{item.text}</Typography>
                  </NavLink>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Fragment>
    );
  }
}

export default withTheme(withStyles(NavBarStyle)(NavBar));
