import React, { Fragment } from 'react';
import Fade from 'react-fade-opacity';
import {
  Card,
  Container,
  Typography,
  Divider,
  Grid,
  TextField,
  Button,
  Dialog,
  Icon
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Check from '@material-ui/icons/Check';

// Resources
import LinkedInLogo from '../Resources/LinkedInLogo.svg';
import FileIcon from '../Resources/file.svg';

// Style object
const FindMeStyles = theme => ({
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
  },
  img: {
    boxShadow: '10px 10px ' + theme.palette.secondary.main
  },
  error: {
    color: theme.palette.error.main
  },
  resumeMarginLeft: {
    marginLeft: '4px'
  },
  buttonMargin: {
    marginBottom: '10px'
  },
  alertPadding: {
    padding: '10px'
  }
});

class FindMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      errorMessages: [],
      emailError: false,
      messageError: false,
      messageSent: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    document.title = 'Ahmed Dregia | Find Me';
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      errorMessages: [],
      [`${event.target.id}Error`]: false
    });
  }

  async handleSubmit() {
    // Our error objects to push to state at the end of the function. If mutated, they will affect the app and display errors
    var newErrors = [];
    var emailError = false;
    var messageError = false;
    // Error messages
    const invalidEmail = 'Please enter a valid email address!';
    const invalidMessage = 'Please enter a message!';
    const formError =
      'There was an error while submitting your message. Please try again later.';
    // Email regular expression
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // If our text fields are in an error state, enter this if block
    if (
      !this.state.email.match(emailRegExp) ||
      this.state.email === '' ||
      this.state.message === ''
    ) {
      if (this.state.message === '') {
        console.log('Message is empty.');
        newErrors.push(invalidMessage);
        messageError = true;
      }
      if (!this.state.email.match(emailRegExp) || this.state.email === '') {
        console.log('Email is invalid');
        newErrors.push(invalidEmail);
        emailError = true;
      }
    } else {
      console.log('Message looks good!');
      const data = new FormData();
      data.set('email', this.state.email);
      data.set('message', this.state.message);

      var response = await fetch(process.env.REACT_APP_FORM_CARRY, {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.email,
          message: this.state.message
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      // If our fetch fails, enter this if block
      if (!response.ok) {
        console.log(response);
        newErrors.push(formError);
      } else {
        this.setState({ messageSent: true, message: '', email: '' });
      }
    }

    this.setState({
      errorMessages: newErrors,
      emailError: emailError,
      messageError: messageError
    });
  }

  handleClose() {
    this.setState({ messageSent: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Container maxWidth="md">
          <Fade in delay={50} interval={5}>
            <Card className={classes.card}>
              <Container>
                <Typography variant="h1">Find Me</Typography>
                <Divider className={classes.divider} />
                <Grid container direction="row" justify="space-between">
                  <Grid
                    item
                    container
                    direction="column"
                    spacing={3}
                    xs={12}
                    sm={8}
                  >
                    <Grid item>
                      <TextField
                        fullWidth
                        id="email"
                        value={this.state.email}
                        onChange={event => this.handleChange(event)}
                        error={this.state.emailError}
                        variant="outlined"
                        label="Email"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        multiline
                        id="message"
                        value={this.state.message}
                        onChange={event => this.handleChange(event)}
                        error={this.state.messageError}
                        variant="outlined"
                        label="Message"
                        rows="10"
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={this.handleSubmit}
                        className={classes.buttonMargin}
                      >
                        Send
                      </Button>
                    </Grid>
                    {this.state.errorMessages.length > 0
                      ? this.state.errorMessages.map(error => (
                          <Grid item key={error}>
                            <Typography
                              variant="body1"
                              className={classes.error}
                            >
                              {error}
                            </Typography>
                          </Grid>
                        ))
                      : null}
                  </Grid>
                  <Grid item container direction="column" xs={12} sm={4}>
                    <Grid
                      item
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <img src={LinkedInLogo} alt="" height="15" />
                      </Grid>
                      <Grid item>
                        <Typography variant="h4">
                          <a
                            href="https://www.linkedin.com/in/ahmed-dregia"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Find me on LinkedIn
                          </a>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <img src={FileIcon} alt="" height="15" />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h4"
                          className={classes.resumeMarginLeft}
                        >
                          <a
                            href="https://drive.google.com/file/d/1M0gjBw9es_txyu7gLEIgs0iegb6IZCey/view?usp=sharing"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Download resumé
                          </a>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Card>
          </Fade>
        </Container>
        <Dialog
          open={this.state.messageSent}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            className={classes.alertPadding}
          >
            <Grid item>
              <Icon>
                <Check />
              </Icon>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Message sent!</Typography>
            </Grid>
          </Grid>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(FindMeStyles)(FindMe);
