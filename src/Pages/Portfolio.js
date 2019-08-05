import React, { Fragment } from 'react';
import Fade from 'react-fade-opacity';
import posed from 'react-pose';
import {
  Card,
  Divider,
  Typography,
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  Modal
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

// Custom components/content
import PortfolioItem from '../Components/PortfolioItem';
import portfolioContent from '../Content/PortfolioContent';

// Style object
const PortfolioStyles = () => ({
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
  iconButton: {
    color: '#fff'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  gridList: {
    backgroundColor: '#f0f0f0',
    minHeight: '100%'
  },

  disclaimer: {
    marginTop: '20px'
  },
  gridTile: {
    textAlign: 'center',
    zIndex: '3'
  },
  img: {
    maxHeight: '250px',
    zIndex: '0'
  },
  overlay: {
    position: 'relative',
    minHeight: '100%',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'rgba(117, 184, 81, 0.5)'
    }
  }
});

const GridSquare = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    document.title = 'Ahmed Dregia | Portfolio';
  }

  componentWillMount() {
    var i = 0;
    var state = {};
    portfolioContent.forEach(item => {
      state[item.app] = false;
      state[i] = { hovering: false };
      i++;
    });
    this.setState(state);
  }

  handleOpen(modal) {
    var state = {};
    state[modal] = true;
    this.setState(state);
  }

  handleClose(modal) {
    var state = {};
    state[modal] = false;
    this.setState(state);
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Container maxWidth="md">
          <Fade in delay={50} interval={5}>
            <Card className={classes.card}>
              <Container>
                <Typography variant="h1">Portfolio</Typography>
                <Divider className={classes.divider} />
                <GridList cellHeight={250} cols={3}>
                  {portfolioContent.map((item, i) => (
                    <GridListTile
                      key={item.app}
                      onClick={this.handleOpen.bind(this, item.app)}
                    >
                      <GridSquare
                        pose={this.state[i].hovering ? 'hovered' : 'idle'}
                        onMouseEnter={() =>
                          this.setState({ [i]: { hovering: true } })
                        }
                        onMouseLeave={() =>
                          this.setState({ [i]: { hovering: false } })
                        }
                        className={classes.gridTile}
                      >
                        <div className={classes.overlay}>
                          <img
                            src={item.imgs[0]}
                            alt={item.app}
                            className={classes.img}
                          />
                        </div>
                        <GridListTileBar
                          title={item.app}
                          titlePosition="top"
                          actionPosition="left"
                          className={classes.titleBar}
                        />
                      </GridSquare>
                    </GridListTile>
                  ))}
                </GridList>
                <Typography variant="body1" className={classes.disclaimer}>
                  <i>
                    Some projects cannot currently be disclosed due to NDA's.
                  </i>
                </Typography>
              </Container>
            </Card>
          </Fade>
        </Container>
        {portfolioContent.map(item => (
          <Modal
            key={item.app}
            open={this.state[item.app]}
            onClose={this.handleClose.bind(this, item.app)}
          >
            <PortfolioItem
              handleClose={this.handleClose.bind(this, item.app)}
              app={item.app}
              images={item.imgs}
              role={item.role}
              technologies={item.technologies}
              description={item.description}
              link={item.link}
              linkDescription={item.linkDescription}
            />
          </Modal>
        ))}
      </Fragment>
    );
  }
}

export default withStyles(PortfolioStyles)(Portfolio);
