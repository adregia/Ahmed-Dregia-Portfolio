import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

// Custom components
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

// Pages
import About from './Pages/About';
import Experience from './Pages/Experience';
import Portfolio from './Pages/Portfolio';
import FindMe from './Pages/FindMe';
import NotFound from './Pages/NotFound';

const MainStyles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/find_me" component={FindMe} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withStyles(MainStyles)(Main);
