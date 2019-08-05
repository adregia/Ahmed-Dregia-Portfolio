import React from 'react';
import { Card, IconButton, Typography, Button } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Close from '@material-ui/icons/Close';

// Custom component imports
import Carousel from './Carousel';

// Style object
const portfolioItemStyles = () => ({
  modalCard: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) !important',
    width: '500px',
    maxHeight: '100vh',
    maxWidth: '100vw'
  },
  modalCardContent: {
    margin: '20px'
  },
  topTextMargin: {
    marginTop: '20px'
  },
  buttonLink: {
    textDecoration: 'none'
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#f0f0f0'
  },
  buttonText: {
    color: '#000'
  }
});

class PortfolioItem extends React.Component {
  render() {
    const {
      handleClose,
      images,
      app,
      role,
      technologies,
      description,
      link,
      linkDescription,
      classes
    } = this.props;

    return (
      <Card className={classes.modalCard}>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
        <Carousel images={images} />
        <div className={classes.modalCardContent}>
          <Typography variant="h2">{app}</Typography>
          <Typography variant="h4">Role: {role}</Typography>
          <Typography variant="h4">Technologies: {technologies}</Typography>
          <Typography variant="body1" className={classes.topTextMargin}>
            {description}
          </Typography>
          {/* Render a button if the item has a link */}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.buttonLink}
            >
              <Button variant="outlined" className={classes.button}>
                <Typography variant="subtitle1" className={classes.buttonText}>
                  {linkDescription} <i className="fas fa-external-link-alt" />
                </Typography>
              </Button>
            </a>
          ) : null}
        </div>
      </Card>
    );
  }
}

export default withStyles(portfolioItemStyles)(PortfolioItem);
