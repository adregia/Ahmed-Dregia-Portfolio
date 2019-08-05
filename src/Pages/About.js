import React, { Fragment } from 'react';
import Fade from 'react-fade-opacity';
import { Card, Grid, Typography, Container } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

// Resources
import Ahmed from '../Resources/Ahmed.jpg';
import ReactIcon from '../Resources/ReactIcon.svg';
import FlutterIcon from '../Resources/FlutterIcon.svg';
import JavaIcon from '../Resources/JavaIcon.svg';
import NodeIcon from '../Resources/NodeIcon.svg';

// Style object
const AboutStyles = theme => ({
  card: {
    marginTop: '10%',
    paddingTop: '100px',
    paddingBottom: '100px',
    transition: 'opacity 0.5s',
    opacity: '1',
    position: 'relative',
    zIndex: '2'
  },
  paragraphBody: {
    marginTop: '15px'
  },
  skills: {
    maxWidth: '261px'
  },
  img: {
    boxShadow: '10px 10px ' + theme.palette.secondary.main
  },
  title: {
    color: theme.palette.secondary.main
  }
});

class About extends React.Component {
  componentDidMount() {
    document.title = 'Ahmed Dregia | About';
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Container maxWidth="md" className={classes.root}>
          <Fade in delay={50} interval={5}>
            <Card className={classes.card}>
              <Container>
                <Grid container direction="row">
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-start"
                    spacing={2}
                    md={4}
                    sm={5}
                    xs={12}
                  >
                    <Grid item>
                      <img
                        src={Ahmed}
                        alt=""
                        width="200"
                        className={classes.img}
                      />
                    </Grid>
                    <Grid
                      item
                      container
                      direction="row"
                      justify="space-between"
                      className={classes.skills}
                    >
                      <Grid
                        xs
                        item
                        container
                        direction="column"
                        alignItems="flex-start"
                        justify="flex-start"
                        spacing={2}
                      >
                        <Grid item>
                          <Typography variant="h3">
                            <img src={ReactIcon} alt="" /> React
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h3">
                            <img src={FlutterIcon} alt="" /> Flutter
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        xs
                        item
                        container
                        direction="column"
                        alignItems="flex-start"
                        justify="flex-start"
                        spacing={2}
                      >
                        <Grid item>
                          <Typography variant="h3">
                            <img src={JavaIcon} alt="" /> Java
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h3">
                            <img src={NodeIcon} alt="" /> Node.js
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item md={8} sm={7} xs={12}>
                    <Typography variant="h1">Ahmed Dregia</Typography>
                    <Typography variant="h2" className={classes.title}>
                      Software Engineer
                    </Typography>
                    <Typography variant="body1">
                      <i className="fas fa-phone" />{' '}
                      <a href="tel:9496486227">(949) 648-6227</a>
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.paragraphBody}
                    >
                      <i className="fas fa-envelope" />{' '}
                      <a href="mailto:ahmed.dregia@gmail.com">
                        ahmed.dregia@gmail.com
                      </a>
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.paragraphBody}
                    >
                      An avid, 21-year-old developer-in-bloom with a lifelong
                      tenacious obsession for problem solving. I have a passion
                      for architecting inventive and responsive solutions to
                      both practical and technical dilemmas.
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.paragraphBody}
                    >
                      In addition to studying concepts like data structures and
                      design patterns, I also seek to engineer bodies in my
                      spare time; I publish fitness-related content and am
                      involved in the sport of powerlifting. The disciplines and
                      concepts imbued in that realm of my life cross over into
                      my professional life in a meaningful way.
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Card>
          </Fade>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(AboutStyles)(About);
