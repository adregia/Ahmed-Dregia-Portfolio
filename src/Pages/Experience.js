import React, { Fragment } from 'react';
import Fade from 'react-fade-opacity';
import withStyles from '@material-ui/core/styles/withStyles';
import { Card, Divider, Typography, Container } from '@material-ui/core';

// Custom components/page content
import ExperienceItem from '../Components/ExperienceItem';
import experienceContent from '../Content/ExperienceContent';

// Style object
const ExperienceStyles = () => ({
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

class Experience extends React.Component {
  componentDidMount() {
    document.title = 'Ahmed Dregia | Experience';
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Container maxWidth="md">
          <Fade in delay={50} interval={5}>
            <Card className={classes.card}>
              <Container>
                <Typography variant="h1">Experience</Typography>
                <Divider className={classes.divider} />
                {experienceContent.map(experienceItem => (
                  <Fragment key={experienceItem.company}>
                    <ExperienceItem
                      title={experienceItem.title}
                      company={experienceItem.company}
                      duration={experienceItem.duration}
                      image={experienceItem.image}
                    />
                    <Typography variant="body1">
                      {experienceItem.body}
                    </Typography>
                    <ul>
                      {experienceItem.responsibilities.map(responsibility => (
                        <Typography key={responsibility} variant="body1">
                          <li>{responsibility}</li>
                        </Typography>
                      ))}
                    </ul>
                  </Fragment>
                ))}
              </Container>
            </Card>
          </Fade>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(ExperienceStyles)(Experience);
