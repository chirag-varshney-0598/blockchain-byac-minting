import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  gallryBox: {
    '& figure': {
      width: '100%',
      height: '250px',
      display: 'flex',
      overflow: 'hidden',
      justifyContent: 'center',
      position: 'relative',
      borderRadius: '10px',
      [theme.breakpoints.down('xs')]: {
        height: '150px',
      },
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        '& div': {
          display: 'block',
        },
        '& img': {
          // transform: "scale(1.2)",
          transform: 'rotate(5deg)',
        },
      },
      '& img': {
        transition: '05s',
        width: 'auto',
        maxWidth: '100%',
        maxHeight: '250px',
        [theme.breakpoints.down('xs')]: {
          maxHeight: '150px',
        },
      },
      '& div': {
        position: 'absolute',
        left: 0,
        top: '0',
        display: 'none',
        backgroundColor: '#00ffff5c',
        width: '100%',
        height: '100%',
        '& p': {
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '& h6': {
          color: '#fff',
          fontWeight: '700',
          fontSize: '30px',
        },
      },
    },
  },
}))

export default function UsersCard(props) {
  const classes = useStyles()
  const { data } = props
  return (
    <Box className={classes.gallryBox}>
      <Link to={{ pathname: '/gallry-details', search: data.id }}>
        <figure>
          <img src={data?.nfdData?.image ? data?.nfdData?.image : ''} alt="" />
          <Box>
            <Typography>
              <label>
                <Typography variant="h6">{data?.id ? data?.id : ''}</Typography>
                <Typography variant="h6">{data?.nfdData?.name}</Typography>
              </label>
            </Typography>
          </Box>
        </figure>
      </Link>
    </Box>
  )
}
