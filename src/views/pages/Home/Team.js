import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core'
import MemberCard from 'src/component/MemberCard'
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: 'transaprent',
    color: '#fff',
    minHeight: '400px',
  },
  headingBox: {
    textAlign: 'center',
    '& h4': {
      color: '#cecece',
      fontSize: '17px',
      marginTop: '20px',
      fontWeight: 300,
    },
  },
  teamContentBox: {
    marginTop: '80px',
  },
}))

const memberCardDetails = [
  {
    name: 'APEX',
    image: 'images/img1.jpeg',
    position: 'Founder/Director',
  },
  {
    name: 'CEASER',
    image: 'images/img3.jpeg',
    position: 'Creative Director',
  },
  {
    name: 'NEEAM',
    image: 'images/img2.jpeg',
    position: 'Web Dev',
  },
  {
    name: 'NEYTIRI',
    image: 'images/img1.jpeg',
    position: 'Smart Contract Dev',
  },
]
export default function () {
  const classes = useStyles()
  return (
    <Container>
      <Box className={classes.mainContainer}>
        <Box className={classes.headingBox}>
          <Typography variant="h2">TEAM</Typography>
          <Box style={{ padding: '0px 45px' }}>
            <Typography variant="h4">
              Our team consist of people with different experience who are
              highly motivated to bring their knowledge and skills to the proect
              in order to create something great.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.teamContentBox}>
          <Grid container spacing={2}>
            {memberCardDetails &&
              memberCardDetails.map((data, index) => {
                return (
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <MemberCard data={data} index={index} />
                  </Grid>
                )
              })}
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
