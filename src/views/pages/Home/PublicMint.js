import React, { useState, useEffect } from "react";
import {
  List,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Grid,
  ListItem,
} from "@material-ui/core";
import { calculateTimeLeft } from "src/utils";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  aboutsection: {
    // padding: "80px 0",
    position: "relative",
    backgroundRepeat: "no-repeat",
    width: "100%",
    padding: "26px 0px",
    background: "#000",
    borderRadius: "10px",
    backgroundSize: "cover",
    "& img": {
      width: "100%",
      borderRadius: "50px",
    },
    "& ul": {
      maxWidth: "600px",
      margin: "0 auto",
      display: "flex",
      marginTop: "0px",
      justifyContent: "center",
      "& li": {
        display: "block",
        padding: "10px",
        textAlign: "center",
        "& span": {
          color: "#fff",
        },
        "& div": {
          width: "100%",
          height: "80px",
          position: "relative",
          margin: "auto",
          marginTop: "10px",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: " center",
          justifyContent: "center",
          fontSize: "40px",
          paddingTop: "0",
          color: "#000",
          borderRadius: " 10px",
          zIndex: "1",
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "60px",
            fontSize: "20px",
          },
          "&::after": {
            content: "''",
            zIndex: "-1",
            position: "absolute",
            width: "100%",
            top: "50%",
            backgroundColor: "#ccc",
            height: "1px",
          },
        },
      },
    },
    "@media(max-width:960px)": {
      marginTop: "-60px",
    },
  },

  textbox: {
    "& h1": {
      fontSize: "50px",
      fontWeight: "600",
      color: "#fff",
      [theme.breakpoints.down("lg")]: {
        fontSize: "50px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
    "& p": {
      fontSize: "14px",
      marginTop: "20px",
      color: "#fff ",
    },
  },
}));

export default function PublicMint({ user }) {
  const classes = useStyles();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [publickMintTime, setPublickMinttime] = useState("");
  useEffect(() => {
    if (user?.preSaleStartTime) {
      setPublickMinttime(user?.preSaleStartTime);
    }
  }, [user?.preSaleStartTime]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(
        calculateTimeLeft(new Date(parseInt(publickMintTime) * 1000))
      );
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Box
      className={classes.aboutsection}
      style={{ backgroundImage: "url('images/bg-date.png')" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box className={classes.textbox} align="center">
              <Typography
                style={{ color: "#FFFFFF" }}
                variant="h3"
                className="text-white"
              >
                {parseFloat(publickMintTime) < parseFloat(moment().unix())
                  ? "PUBLIC MINT STARTED"
                  : "PUBLIC MINT OPENING"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {" "}
            {parseFloat(publickMintTime) < parseFloat(moment().unix()) ? (
              ""
            ) : (
              <List>
                <ListItem>
                  <span>DAYS</span>
                  <div>{timeLeft?.days ? timeLeft?.days : "0"}</div>
                </ListItem>
                <ListItem>
                  <span>HOURS</span>
                  <div>{timeLeft?.hours ? timeLeft?.hours : "0"}</div>
                </ListItem>
                <ListItem>
                  <span>MINUTES</span>
                  <div>{timeLeft?.minutes ? timeLeft?.minutes : "0"}</div>
                </ListItem>
                <ListItem>
                  <span>SECONDS</span>
                  <div>{timeLeft?.seconds ? timeLeft?.seconds : "0"}</div>
                </ListItem>
              </List>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box align="center">
              {parseFloat(publickMintTime) < parseFloat(moment().unix()) ? (
                <Typography
                  variant="contained"
                  className="mintingSoon"
                  color="secondary"
                >
                  MINTING STARTED
                </Typography>
              ) : (
                <Typography
                  variant="contained"
                  className="mintingSoon"
                  color="secondary"
                >
                  MINTING SOON
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
