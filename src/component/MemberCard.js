import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  memberBox: {
    textAlign: 'center',
    '& img': {
      width: '90%',
      borderRadius: '10px',
      border: '3px solid #fff',
    },
    '& h3': {
      fontWeight: '900',
    },
    '& h4': {
      color: '#00ffff',
      fontWeight: '600',
    },
  },
}))
export default function MemberCard({ data, index }) {
  const classes = useStyles()
  return (
    <Box className={classes.memberBox} key={index}>
      <img src={data?.image} alt="" />
      <Typography variant="h3">{data.name ? data.name : ''}</Typography>
      <Typography variant="h4">{data.position ? data.position : ''}</Typography>
    </Box>
  )
}
