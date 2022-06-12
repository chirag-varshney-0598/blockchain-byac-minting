import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { } from "react-feather";

const useStyles = makeStyles((theme) => ({
  footerSection: {
    background: "#161515",
    position: "relative",
    paddingTop: theme.spacing(4),
    paddingBottom: "2px",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),
    },
    "& h5": {
      fontWeight: "bold",
      fontSize: "16px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color:"#fff",
    },
    '& ul': {
      paddingLeft: "0",
    },
    "& p": {
      marginBottom: "20px",
      marginTop: "10px",
      fontWeight: "500",
      fontSize: "17px",
      lineHeight: "31px",
      textAlign: "center",
      color: "#cecece",
      padding: "20px",
    },
  },
  input_fild: {
    backgroundColor: "#e1e1e1",
    borderRadius: "50px",
    color: "#000",
    height: "55px",
    width: "100%",
    borderBottom: "none",
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    },
    "& .MuiInputBase-input": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
      borderWidth: 0,
    },
  },

  footerBg: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    left: "0",
  },
  ListItem: {
    paddingLeft: "0px",
  },
  borderBottmo: {
    overflow: "hidden",
    background: "#000",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
  signupBtn: {
    color: "#fff",
    display: "flex",
    fontSize: "16px",
    fontWeight: "bold",
    height: "45px",
    minWidth: "100px",
    borderRadius: "50px",
    position: "absolute",
    top: "5px",
    right: "5px",
    boxShadow:
      "0px 8px 24px rgba(38, 50, 56, 0.1), 0px 16px 32px rgba(38, 50, 56, 0.08)",
    lineHeight: "36px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: " 1px",
    background: "#040405",
    "&:hover": {
      background: "#040405",
      color: "#fff",
    },
  },
  largeIcon: {
    width: 18,
    height: 18,
    marginRight: "8px",
  },
  icons: {
    justify: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justify: "center",
    },
  },
  inputBox: {
    position: "relative",
  },
  footerBgImg:{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex:"1",
  },
}));

export default function Liquidity() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footerSection}>
        
        <Box style={{ margin: "20px 10px 0",position:"relative",zIndex:"2", }}>
          <Container maxWidth="lg">
            <Grid
              container
              justify="space-around"
              spacing={1}
            >
              <Grid item xs={12} md={12}>
              <Typography variant="body1" align="center">incididunt ut labore et dolore magna aliqua.ion ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. incididunt ut labore et dolore magna aliqua.ion ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. 
             </Typography>
              </Grid>

            <Grid item xs={6} md={4} align="center">
            <FacebookIcon style={{paddingRight:"10px"}} />
            <TwitterIcon />
              </Grid>
              
            
              {/* <Grid item xs={6} md={4} align="center">
                <Typography variant="h5">Find us on Social Media</Typography>
                <Box align="center" mt={3} mb={3} className="follow">  
                <img src="images/facebook-logo.png" alt="facebook"/>
                <img src="images/twitter-logo.png" alt="twitter"/>
                <img src="images/linkedin-logo.png" alt="linkedin"/>
                <img src="images/instagram-logo.png" alt="instagram"/>
                </Box>
              </Grid> */}

              {/* <Grid item xs={12} md={4} align="center">
              <Typography variant="h5">We’r always happy to help.</Typography>
              </Grid> */}
            </Grid>
           
            {/* <Grid alignItems="center"> */}
            

          </Container>
          <p style={{borderTop:  "1px solid rgba(255, 255, 255, 0.3)", color:"#726C6C"}}> Copyright @2021</p>
        </Box>
      </Box>
    </>
  );
}



