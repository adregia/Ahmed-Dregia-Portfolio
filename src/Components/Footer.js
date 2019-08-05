import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Grid, Container, IconButton } from '@material-ui/core';

// Resources
import LinkedInLogo from '../Resources/LinkedInLogo.svg';
import FileIcon from '../Resources/file.svg';

// Style object
const FooterStyle = theme => ({
  root: {
    position: 'sticky',
    width: '100%',
    height: '80px',
    paddingTop: '20px',
    bottom: '0',
    background: '#f0f0f0',
    marginTop: 'auto'
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Container>
            <Grid container direction="row" justify="center">
              <Grid item>
                <a
                  href="https://www.linkedin.com/in/ahmed-dregia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton className={classes.button}>
                    <img src={LinkedInLogo} height="15" alt="" />
                  </IconButton>
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://drive.google.com/file/d/1M0gjBw9es_txyu7gLEIgs0iegb6IZCey/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton className={classes.button}>
                    <img src={FileIcon} height="15" alt="" />
                  </IconButton>
                </a>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(FooterStyle)(Footer);
