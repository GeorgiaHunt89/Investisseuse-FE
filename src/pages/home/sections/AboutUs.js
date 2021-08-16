import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../../../components/typography/Typography';
import { PlayCircleFilledWhite } from '@material-ui/icons';

// Styling
const leatherBackground = './src/img/leatherBackground.png';
const imageMentor = './src/img/mentorIcon.png';
const imageNetwork = './src/img/networkIcon.png';
const imageOpportunities = './src/img/opportunities.png';

const styles = (theme) => ({
  background: {
    backgroundColor: '#15253F', //Dark Blue
    backgroundPosition: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#15253F', //Dark Blue
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  imageMentor: {
    Image: `url(${imageMentor})`,
    marginTop: theme.spacing(14),
    display: 'flex',
  },
  imageNetwork: {
    Image: `url(${imageNetwork})`,
    marginTop: theme.spacing(14),
    display: 'flex',
  },
  imageOpportunities: {
    Image: `url(${imageOpportunities})`,
    marginTop: theme.spacing(14),
    display: 'flex',
  },
});

function AboutUs(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.backgroundColor} alt="BlueBackground" />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img src="./src/img/MentorIcon.png" alt="imageMentor" height="150" />
              <img className={classes.imageMentor} src=".src/img/MentorIcon.png" alt="Image" /> */}
              <Typography style={{ color: 'white' }} variant="h6" className={classes.title}>
                Mentoring Advice
              </Typography>
              <Typography style={{ color: 'white' }} variant="h8">
                {'Feel like you need some guidance and mentorship through the start of your business journey?'}
                {'We connect seasoned veterans with new founders to help them navigate this new terrain.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img src="./src/img/NetworkIcon.png" alt="imageNetwork" height="150" />
              <img className={classes.imageNetwork} src=".src/img/NetowrkIcon.png" alt="Image" /> */}
              <Typography variant="h6" style={{ color: 'white' }} className={classes.title}>
                Network
              </Typography>
              <Typography style={{ color: 'white' }} variant="h8">
                {'Our team have build long lasting connections with some of the top industry greats, '}
                {'we can help you get intouch and network with the right individuals'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img src="./src/img/Opportunities.png" alt="imageOpportunities" height="150" />
              <img className={classes.imageOpportunities} src=".src/img/Opportunities.png" alt="Image" /> */}
              <Typography variant="h6" style={{ color: 'white' }} className={classes.title}>
                Exclusive opportunities
              </Typography>
              <Typography style={{ color: 'white' }} variant="h8">
                {'Working with a range of startup gives our investors access to potential unicorns, '}
                {'find that one in a million start up to invest in today.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);
