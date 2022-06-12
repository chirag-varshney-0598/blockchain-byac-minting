import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Box, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  circularProgress: {
    color: "#fff",
    padingRight: "50px",
  },
});

function ButtonCircularProgress(props) {
  const { size, classes } = props;
  return (
    <Box color="secondary.main" display="flex" pl={7}>
      <CircularProgress
        size={size ? size : 30}
        thickness={size ? (size / 5) * 30 : 5}
        className={classes.circularProgress}
      />
    </Box>
  );
}

ButtonCircularProgress.propTypes = {
  size: PropTypes.number,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ButtonCircularProgress);
