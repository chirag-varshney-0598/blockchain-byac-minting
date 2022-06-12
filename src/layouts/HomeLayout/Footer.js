import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Link,
} from '@material-ui/core'
import { BsDiscord } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'
import {} from 'react-feather'

const useStyles = makeStyles((theme) => ({
  footerSection: {
    background: 'transparent',
    position: 'relative',
    paddingTop: theme.spacing(4),
    paddingBottom: '33px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(4),
    },
    '& h5': {
      fontSize: '17px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#fff',
    },
    '& ul': {
      paddingLeft: '0',
    },
    '& p': {
      marginBottom: '20px',
      marginTop: '10px',
      fontWeight: '300',
      fontSize: '17px',
      lineHeight: '1.5',
      textAlign: 'center',
      color: '#cecece',
    },
  },
  input_fild: {
    backgroundColor: '#e1e1e1',
    borderRadius: '50px',
    color: '#000',
    height: '55px',
    width: '100%',
    borderBottom: 'none',
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
      },
    },
    '& .MuiInputBase-input': {
      color: '#000',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
      borderWidth: 0,
    },
  },

  footerBg: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    left: '0',
  },
  ListItem: {
    paddingLeft: '0px',
  },
  borderBottmo: {
    overflow: 'hidden',
    background: '#000',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
  signupBtn: {
    color: '#fff',
    display: 'flex',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '45px',
    minWidth: '100px',
    borderRadius: '50px',
    position: 'absolute',
    top: '5px',
    right: '5px',
    boxShadow:
      '0px 8px 24px rgba(38, 50, 56, 0.1), 0px 16px 32px rgba(38, 50, 56, 0.08)',
    lineHeight: '36px',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: ' 1px',
    background: '#040405',
    '&:hover': {
      background: '#040405',
      color: '#fff',
    },
  },
  largeIcon: {
    width: 35,
    height: 35,
    marginRight: '8px',
    color: '#fff',
  },
  icons: {
    justify: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justify: 'center',
    },
  },
  inputBox: {
    position: 'relative',
  },
  footerBgImg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: '1',
  },
}))

export default function Liquidity() {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.footerSection}>
        <Box
          style={{ margin: '20px 10px 0', position: 'relative', zIndex: '2' }}
        >
          <Container maxWidth="lg">
            <Grid container justify="space-around" spacing={1}>
              <Grid item xs={12} md={12} align="center">
                <Box style={{ maxWidth: '500px' }}>
                  <Typography
                    variant="h2"
                    style={{ color: '#FFFFFF', fontWeight: '600' }}
                    className="text-white"
                  >
                    JOIN THE COMMUNITY
                  </Typography>
                  <Typography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                  <Box align="center" mt={3} mb={3} className="follow">
                    <Link href="#" target="_blank">
                      <BsDiscord className={classes.largeIcon} />
                    </Link>
                    <Link href="#" target="_blank">
                      <FaTwitterSquare className={classes.largeIcon} />
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}
