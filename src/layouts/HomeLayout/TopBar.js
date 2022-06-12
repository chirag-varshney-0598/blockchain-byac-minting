import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Grid,
  Box,
  MenuItem,
  Container,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from 'src/context/User'
import Logo from './../../component/Logo'
import { ACTIVE_NETWORK } from 'src/constants'
import { sortAddress } from 'src/utils'
import { useWeb3React } from '@web3-react/core'
// const headersData = [
//   {
//     label: "Home",
//     href: "/",
//   },
// ];

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '500',
    borderRadius: 0,
    minWidth: 'auto',
    color: '#fff',
    height: '31px',
    padding: '0px 7px',
    letterSpacing: '1px',
    marginLeft: '15px',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      fontStyle: 'normal',
      letterSpacing: '-0.6px',
      lineHeight: '24px',
      color: '#FFF',
      padding: '20px !important',
      height: '51px',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    '&:active': {
      color: '#FFFFFF',
    },
    '&:hover': {
      color: '#00ffff',
    },
  },
  login: {
    backgroundColor: '#ec0066',
    marginLeft: '10px',
  },
  loginButton: {
    height: '28px',

    width: '28px',
  },
  toolbar: {
    display: 'flex',
    paddingTop: '10px',
    paddingBottom: '10px',
    justifyContent: 'space-between',
    height: '100%',
    '@media (max-width: 900px)': {
      height: '100%',
    },
  },
  maindrawer: {
    height: '100%',
    background: '#0c0731',
    width: '260px',
  },
  logoDrawer: {
    // paddingLeft: "10px",
    width: '140px',
    marginBottom: '30px',
  },
  drawerContainer: {
    padding: '20px 0px ',
    height: '100%',
    background: '#000',
    width: '240px',
    display: 'flex',
    // paddingLeft: "20px",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  drawericon: {
    color: '#000',
    position: 'absolute',
    top: '0px',
    right: '-10px',
    fontSize: '25px',
  },
  logoImg: {
    width: '75px',
    // height: '44.5px',
    margin: ' 14px 15px 11px 0px',
    objectFit: 'contain',
    '@media (max-width: 500px)': {
      margin: ' 11px 1px 3px 0px',
      width: '52px',
    },
  },
  menuMobile: {
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: '-0.6px',
    lineHeight: '1.75',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #3e3e3e',
    padding: '16px',
    borderRadius: 0,
    width: '100%',
    '@media (max-width: 500px)': {
      // padding: "7px 0",
      width: '100%',
    },
  },
  paper1: {
    background: 'black',
    color: 'white',
  },
  containerHeight: {
    height: '100%',
  },
  mainHeader: {
    justifyContent: 'space-between',
    padding: '0px',
  },
  search: {
    height: '31px',
    position: 'relative',
    color: '#ABABAB',
    borderRadius: '100px',
    backgroundColor: '#E6E6E6',
    border: '1px solid #fff',
    '&:hover': {
      backgroundColor: '#ececec',
      border: '1px solid #300760',
    },
    marginLeft: 20,
    width: '140px',
    maxWidth: '257px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '180px',
    },
  },
  searchIcon: {
    fontSize: '16px',
    padding: theme.spacing(0, 2),
    color: '#000000',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    fontSize: '16px',
  },
  wallet: {
    fontSize: '14px',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '21px',
    color: '#fff',
    border: '1px solid #ec0066',
    padding: '0 15px',
    background: '#ec0066',
    borderRadius: '50px',
    height: '31px',
    '&:hover': {
      background: '#fff',
      color: '#ec0066',
    },
    '@media (max-width: 900px)': {
      marginLeft: '12px',
      marginTop: '12px',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: '13px',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100px',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
  submenu: {
    borderTop: '3px solid #300760',
    top: '25px !important',
  },
}))

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClose1 = () => {
    setAnchorEl(null)
  }
  const {
    loginButton,
    menuMobile,
    menuButton,
    menuButton1,
    toolbar,
    drawerContainer,
    drawericon,
    login,
    logoDrawer,
    containerHeight,
    mainHeader,
    wallet,
    submenu,
  } = useStyles()
  const history = useHistory()
  const { account, chainId } = useWeb3React()
  const user = useContext(UserContext)

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  const [open1, setOpen1] = useState({ community: false, user: false })
  const anchorRef = { community: useRef(null), user: useRef(null) }

  // const handleToggle = (name) => {
  //   setOpen1({ ...open1, [name]: !open1[name] });
  // };

  const handleClose2 = (event, name) => {
    if (
      anchorRef[name].current &&
      anchorRef[name].current.contains(event.target)
    ) {
      return
    }

    setOpen1({ ...open1, [name]: false })
  }

  function handleListKeyDown(event, name) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen1({ ...open1, [name]: false })
    }
  }

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open1);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open1 === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open1;
  // }, [open1]);

  const displayDesktop = () => {
    return (
      <Container maxWidth="lg" className="p-0">
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <Grid
            container
            item
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ paddingLeft: '0px' }}
          >
            {/* {getMenuButtons()} */}

            <Box
              style={{ display: 'flex', right: '15px', position: 'absolute' }}
            >
              {account && ACTIVE_NETWORK === chainId && (
                <>
                  {/* <Button
                    variant="text"
                    size="large"
                    color="secondary"
                    onClick={() => history.push("/")}
                    style={{ marginRight: 20 }}
                  >
                    Home
                  </Button> */}
                  {/* <Button
                    variant="text"
                    size="large"
                    color="secondary"
                    // onClick={() => history.push('/wallet')}
                  >
                    {sortAddress(account)}
                  </Button> */}
                  {/* <Button
                    variant="text"
                    size="large"
                    color="secondary"
                    onClick={() => history.push('/wallet')}
                  >
                    WALLET
                  </Button> */}
                  {/* <Typography variant="h4">{sortAddress(account)}</Typography> */}
                </>
              )}

              {!account ? (
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  // className="walletConnectButon"
                  onClick={user.connectWallet}
                  // component={Link}
                  // to="/wallet"
                >
                  CONNECT WALLET
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  onClick={user.disconnectWalletHandler}
                >
                  Disconnect {account ? sortAddress(account) : ''}
                </Button>
              )}
            </Box>
          </Grid>
        </Toolbar>
      </Container>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: 'right',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <Box className="logoText">
              <Link to="/">
                <Typography variant="h4">MOONRIVER BAYC</Typography>
              </Link>
            </Box>
            {/* {getDrawerChoices()} */}

            {/* {account && (
              <Button
                variant="text"
                size="large"
                className={menuMobile}
                color="secondary"
                // onClick={() => history.push('/wallet')}
              >
                {sortAddress(account)}
              </Button>
            )} */}

            {/* <Button
              variant="text"
              size="large"
              className={menuMobile}
              color="secondary"
              onClick={() => history.push('/wallet')}
            >
              WALLET
            </Button> */}
            {/* {!account ? (
              <Button
                variant="text"
                size="large"
                className={menuMobile}
                color="secondary"
                onClick={user.connectWallet}
              >
                Connect Wallet
              </Button>
            ) : (
              <Button
                variant="text"
                size="large"
                className={menuMobile}
                color="secondary"
                onClick={() => history.push("/wallet")}
              >
                Wallet
              </Button>
            )} */}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <Grid container>
          <Grid item xs={10}></Grid>

          <Grid item xs={2}>
            <IconButton
              className={drawericon}
              {...{
                edge: 'start',
                color: 'inherit',
                'aria-label': 'menu',
                'aria-haspopup': 'true',
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon
                width="60px"
                height="60px"
                style={{ color: 'rgb(219 9 9)', fontSize: '30px' }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    )
  }

  const femmecubatorLogo = (
    <Box className="logoText">
      <Link to="/">
        <Typography variant="h4">MOONRIVER BAYC</Typography>
      </Link>
    </Box>
  )
  // const getDrawerChoices = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <Box style={{ width: "106%" }}>
  //         <Button
  //           {...{
  //             key: label,
  //             color: "inherit",
  //             to: href,
  //             component: Link,
  //             className: menuButton1,
  //           }}
  //           style={{ width: "100%" }}
  //         >
  //           <MenuItem className={menuMobile}>{label}</MenuItem>
  //         </Button>
  //       </Box>
  //     );
  //   });
  // };

  // const getMenuButtons = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <>
  //         <Button
  //           {...{
  //             key: label,
  //             color: "inherit",
  //             to: href,
  //             component: Link,
  //             className: menuButton,
  //           }}
  //         >
  //           {label}
  //         </Button>
  //       </>
  //     );
  //   });
  // };

  return (
    <>
      <AppBar
        position={history.location.pathname !== '/' ? 'relative' : 'relative'}
        elevation={0}
        style={{ backgroundColor: '#ccc0', border: 'none' }}
      >
        <Container
          maxWidth={history.location.pathname !== '/' ? 'lg' : 'fixed'}
          className={containerHeight}
        >
          {/* {mobileView ? displayMobile() : displayDesktop()} */}
          {displayDesktop()}
        </Container>
      </AppBar>
    </>
  )
}
