import React, { Fragment } from 'react';
import Fade from 'react-fade-opacity';
import { Card, Divider, Typography, Container } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

// Style object
const NotFoundStyles = () => ({
  card: {
    marginTop: '10%',
    paddingTop: '30px',
    paddingBottom: '30px',
    marginBottom: '50px',
    zIndex: '1',
    position: 'relative'
  },
  divider: {
    marginTop: '10px',
    marginBottom: '20px'
  }
});

class NotFound extends React.Component {
  componentDidMount() {
    document.title = 'Ahmed Dregia | 404';
  }

  render() {
    const { classes } = this.props;
    const messages = [
      'Nothing to see here!',
      "We can't find that..",
      'Try a different option.'
    ];

    return (
      <Fragment>
        <Container maxWidth="md">
          <Fade in delay={50} interval={5}>
            <Card className={classes.card}>
              <Container>
                <Typography variant="h1">
                  {messages[Math.floor(Math.random() * 3)]}
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1">
                  Try a different page from the top menu.
                </Typography>
              </Container>
            </Card>
          </Fade>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(NotFoundStyles)(NotFound);
