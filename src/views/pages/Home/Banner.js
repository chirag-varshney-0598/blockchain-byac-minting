import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: 'relative',
    // backgroundImage: "url(./images/banner/bg.png)",
    // backgroundRepeat: "no-repeat",
    // background: "linear-gradient(0deg, #060606 0%, rgba(0, 0, 0, 0) 139.5%)",
    // backgroundSize: "cover",
    padding: '80px 0px 120px',
    zIndex: ' 1',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      '@media (max-width: 768px)': {
        padding: '60px 0px 120px',
      },
    },
  },
  bannerimages: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
    '& figure': {
      height: 'auto',
      marginLeft: '20px',
      marginBottom: '20px',
      overflow: 'hidden',
      [theme.breakpoints.down('xs')]: {
        width: '150px',
        overflow: 'inherit',
      },
      '& img': {
        transition: '02s',
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        },
      },

      '&:hover': {
        '& img': {
          transform: 'scale(1.1)',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        },
      },
    },
  },
  gridflex: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  marginleft: {
    marginLeft: '10px !important',
  },
  textbox: {
    textAlign: 'left',
    '& h1': {
      fontSize: '45px',
      fontWeight: '600',
      color: '#FFFFFF',
      [theme.breakpoints.down('lg')]: {},
      [theme.breakpoints.down('xs')]: {
        fontSize: '30px',
        textAlign: 'left',
      },
    },
    '& p': {
      fontWeight: '300',
      fontSize: '17px',
      marginTop: '20px',
      color: '#cecece',
    },
  },
  image2: {
    marginLeft: '-20px !important',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0px !important',
    },
  },
  buttonright: {
    marginLeft: '10px !important',
    minWidth: '150px',
  },
  minth1: {
    fontFamily: 'Italianno',
    fontSize: '80px !important',
    fontWeight: '100px !important',
    lineHeight: '80px',
  },
}))

export default function BestSeller() {
  const classes = useStyles()

  return (
    <Box className={classes.bannerBox}>
      <Container maxWidth="lg" p={0}>
        <Grid container spacing={3} alignItems="left">
          <Grid item xs={12} md={6} className={classes.gridflex}>
            <Box className={classes.textbox}>
              <Typography variant="h1">
                Let's grab some of the most wanted MBYAC NFT.
              </Typography>
              <Typography variant="body1" align="left">
                MBAYC is an exclusive 7777 only premium NFT on the Moonriver
                blockchain with blue chip potential No two of these digital
                eye-catching pieces of art are alike. Each being uniquely
                generated from over 140+ never seen Before traits, our traits
                have specific rarities to ensure there is a clear ranking of
                NFTs and distinct differences in value for the marketplace.
                MBAYC is inspired by its Ethereum counterpart but is not
                affiliated with yuga labs.
              </Typography>

              <Typography variant="body1" align="left">
                MBAYC is the first ape derivative on MOVR blockchain and prides
                itself on being a community ran and community focused together
                we can make history on the MOVVR blockchain.
              </Typography>
              {/* <Box mt={6} align="left">
                <Button
                  style={{ marginRight: '10px' }}
                  variant="contained"
                  size="large"
                  color="secondary"
                  target="_blank"
                  href="https://thedefiantsnft.com/"
                >
                  LEARN MORE ABOUT US
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  component={Link}
                  to="/gallery"
                >
                  GALLERY
                </Button>
              </Box> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="bannerimageBox">
              <img
                src="images/img1.jpeg"
                className="banner1"
                alt="banner image"
              />
              <img
                src="images/img2.jpeg"
                className="banner2"
                alt="banner image"
              />
              <img
                src="images/img3.jpeg"
                className="banner3"
                alt="banner image"
              />
              {/* <img
                src="images/mint-pagev5.jpg"
                // className="banner1"
                style={{ width: '80%' }}
                alt="banner image"
              /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
