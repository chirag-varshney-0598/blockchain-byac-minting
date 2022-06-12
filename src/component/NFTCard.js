import React from "react";
import { Typography, Box, makeStyles, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";
import { SiEthereum } from "react-icons/si";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  NftImg: {
    borderRadius: 10,
    display: "block",
    height: "200px",
    position: "relative",
    overflow: "hidden",
  },
  bottomblock: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  bottomTop: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    margin: "10px 0 0",
  },
  playbutton: {
    position: "absolute",
    bottom: 5,
    right: 10,
  },
}));

export default function NFTCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { type, data } = props;
  const classes = useStyles();

  return (
    <Box className="CardBox">
      <Box className="collectionSet" style={{ padding: "20px" }}>
        <Box className="card_heading">
          <Box className="card_text">
            <Box className="token_box">
              <Box className="Token_img">
                <img src="images/token/1.png" alt="" />
                <Box className="hoveredElement">
                  <Typography variant="body2">
                    Collection:<span>John Doe</span>
                  </Typography>
                </Box>
              </Box>
              <Box className="Token_img">
                <img src="images/token/2.png" alt="" />
                <img
                  src="images/token/check.png"
                  className="check_icon"
                  alt=""
                />
                <Box className="hoveredElement">
                  <Typography variant="body2">
                    Creator:<span>Anderson</span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Typography variant="body1" onClick={handleClick}>
            <HiOutlineDotsHorizontal
              style={{ fontSize: "24px", color: "#979595" }}
            />
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Share</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </Menu>
        </Box>
        <Box className={classes.NftImg}>
          <Link to="/nft-details">
            <img
              src={data.img}
              width="100%"
              alt=""
              style={{ borderRadius: "5px" }}
            />
          </Link>
          {/* <Box className={classes.playbutton} >
            <Avatar style={{backgroundColor:"#1ed760",cursor:"pointer"}}>
              <PlayArrowIcon/>
            </Avatar>
              </Box> */}
        </Box>
        {type == "timing" ? (
          ""
        ) : (
          <Box className="timing">
            <Typography variant="body2" component="label">
              04h
            </Typography>
            <Typography variant="body2" component="label">
              31m
            </Typography>
            <Typography variant="body2" component="label">
              10s
            </Typography>
            <Typography variant="body2" component="label">
              left
            </Typography>
          </Box>
        )}

        <Box mt={2}>
          <Grid container justify="space-between">
            <Grid item className="NFTDetailsBox"></Grid>
            <Box className="FooterData">
              <Box className="width100">
                <Box className="LikesWithPrice">
                  <Typography variant="h4">{data.name}</Typography>
                  <SiEthereum style={{ fontSize: "18px" }} />
                </Box>
                <Typography variant="h6">Highest bid 1/1</Typography>

                <Box className="LikesWithPrice">
                  <Typography variant="body2">0.053 ETH</Typography>
                  <Box className="d-flex text-black" pt={0}>
                    <Typography className="like_box">
                      {" "}
                      <BiHeart style={{ fontSize: "16px", color: "#f30066" }} />
                    </Typography>
                    <span
                      style={{
                        marginLeft: "5px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#3D3D3D",
                      }}
                    >
                      {data.likes}
                    </span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
