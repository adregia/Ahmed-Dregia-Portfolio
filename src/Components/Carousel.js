import React, { Fragment } from 'react';
import { IconButton, Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';

// Style object
const CarouselStyles = theme => ({
  backdrop: {
    backgroundColor: '#f0f0f0',
    width: '500px',
    textAlign: 'center',
    height: '300px'
  },
  image: {
    height: '100%'
  }
});

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: null, currentIndex: null };

    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
  }

  componentWillMount() {
    this.setState({ currentImage: this.props.images[0], currentIndex: 0 });
  }

  // Could probably create one "handleClick" function and pass it parameters..
  handleNextClick() {
    if (this.state.currentIndex + 1 === this.props.images.length) {
      this.setState({ currentImage: this.props.images[0], currentIndex: 0 });
    } else {
      this.setState({
        currentImage: this.props.images[this.state.currentIndex + 1],
        currentIndex: this.state.currentIndex + 1
      });
    }
  }

  handlePreviousClick() {
    if (this.state.currentIndex - 1 === -1) {
      this.setState({
        currentImage: this.props.images[this.props.images.length - 1],
        currentIndex: this.props.images.length - 1
      });
    } else {
      this.setState({
        currentImage: this.props.images[this.state.currentIndex - 1],
        currentIndex: this.state.currentIndex - 1
      });
    }
  }

  render() {
    const { images, classes } = this.props;

    return (
      <Fragment>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <div className={classes.backdrop}>
              <img
                src={this.state.currentImage}
                alt=""
                className={classes.image}
              />
            </div>
          </Grid>
          {/* Only displays the toggles if there is more than one image in the array. */}
          {images.length > 1 ? (
            <Grid item>
              <IconButton onClick={this.handlePreviousClick}>
                <ChevronLeft />
              </IconButton>
              <IconButton onClick={this.handleNextClick}>
                <ChevronRight />
              </IconButton>
            </Grid>
          ) : null}
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(CarouselStyles)(Carousel);
