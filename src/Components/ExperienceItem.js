import React, { Fragment } from 'react';
import { Typography, Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

// Style object
const ExperienceItemStyles = theme => ({
  h2: {
    lineHeight: 1.5
  },
  h3: {
    color: theme.palette.secondary.main,
    lineHeight: 1.5
  },
  h4: {
    marginBottom: '20px'
  }
});

class ExperienceItem extends React.Component {
  render() {
    const { title, company, duration, image, classes } = this.props;
    return (
      <Fragment>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <Typography variant="h2" className={classes.h2}>
              {title}
            </Typography>
            <Typography variant="h3" className={classes.h3}>
              {company}
            </Typography>
            <Typography variant="h4" className={classes.h4}>
              {duration}
            </Typography>
          </Grid>
          <Grid item>
            {/* If the item does not have an image, do not display (creates unnecessary whitespace) */}
            {image ? <img src={image} alt="" height="75" /> : null}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(ExperienceItemStyles)(ExperienceItem);
