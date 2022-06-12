import React, { useState, useEffect, useContext } from 'react'
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core'
import Page from 'src/component/Page'
import { useWeb3React } from '@web3-react/core'
import { UserContext } from 'src/context/User'
import { useLocation } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { mintAddress, ACTIVE_NETWORK } from 'src/constants'
import RezwanPodABI from 'src/constants/ABI/RezwanPodABI.json'
import axios from 'axios'
import {
  getWeb3Obj,
  getContract,
  swichNetworkHandler,
  getWeb3ContractObject,
} from 'src/utils'
import ButtonCircularProgress from 'src/component/ButtonCircularProgress'
const useStyles = makeStyles((theme) => ({
  Padding_Top: {
    paddingTop: '50px',
    backgroundColor: '#000',
    '& h3': {
      color: '#00ffff',
    },
  },
  filterbox: {
    display: 'inline-block',
    flesWarp: 'warp',
    minWidth: '90px',
    boxShadow: 'rgb(0 0 0 / 13%) 0px 5px 15px',
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px 5px',
    transition: ' 02s',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
    '& label': {
      fontSize: '15px',
      paddingBottom: 0,
      color: '#00ffff',
    },
    '& p': {
      color: 'white',
    },
  },
  boxheading: {
    '& h3': {
      fontSize: '30px',
      paddingBottom: 0,
      color: '#00ffff',
      marginBottom: '10px',
    },
    '&  div': {
      // border: "1px solid white",
      display: ' inline-block',
      padding: '10px',
      borderRadius: '5px',
      marginTop: '20px',
      color: '#fafafa',
      fontWeight: '600',
    },
  },

  boxheading1: {
    display: ' inline-block',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '20px',
    color: '#fafafa',
    fontWeight: '600',
  },

  dialoginputbox: {
    width: '393px',
    height: '35px',
    border: '2px solid #00ffff',
    paddingLeft: '10px',
    backgroundColor: 'rgb(235 235 235)',
    borderRadius: '8px',
    '@media (max-width: 900px)': {
      width: '291px',
    },
  },

  deatailimage: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    padding: '50px 0',
    overflow: 'hidden',
    position: 'relative',
    background: 'rgba(12, 12, 13, 0.91)',
    textAlign: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
    '& img': {
      filter: ' drop-shadow(rgba(0, 0, 0, 0.25) 0px 20px 20px)',
      maxHeight: '100%',
      borderRadius: '10px',
      maxWidth: '100%',
    },
  },
}))
function Gallery(props) {
  const { account, library, chainId } = useWeb3React()
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  const [nftDetails, setnftDetails] = useState()
  const user = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false)
  const [ownerOf, setOwnerOf] = useState('')
  const location = useLocation()
  const [isUpdate, setIsUpdate] = useState(false)
  const [transferAddress, setTransferAddress] = useState('')
  const handleClose = () => {
    setOpen(false)
  }
  const getDetails = async (id) => {
    setIsLoading(true)
    try {
      const contract = await getWeb3ContractObject(RezwanPodABI, mintAddress)

      const ownerOf_L = await contract.methods.ownerOf(id.toString()).call()
      setOwnerOf(ownerOf_L)

      const filter = await contract.methods.tokenURI(id.toString()).call()
      const res = await axios.get(filter)

      if (res.status === 200) {
        setnftDetails({ id: id.toString(), nfdData: res.data })
        console.log(' res.data', res.data)
        setIsLoading(false)
      }
    } catch (error) {
      console.log('ERROR', error)
      setIsLoading(false)
    }
  }
  const transferFromHandler = async () => {
    if (chainId === ACTIVE_NETWORK) {
      if (transferAddress && transferAddress !== '') {
        const web3 = await getWeb3Obj()
        const dataRes = web3.utils.isAddress(transferAddress)
        if (dataRes) {
          try {
            setIsUpdate(true)
            const contract = getContract(
              mintAddress,
              RezwanPodABI,
              library,
              account,
            )

            const res = await contract.transferFrom(
              account,
              transferAddress,
              nftDetails.id,
            )
            await res.wait()
            toast.success('Success')
            setIsUpdate(false)
            getDetails(nftDetails.id)
            user.getCurrentMintingDetails()
            handleClose()
          } catch (error) {
            setIsUpdate(false)

            toast.error(error.message)
            console.log('error', error)
          }
        } else {
          toast.error('Please enter valid address')
        }
      } else {
        toast.error('Please enter address')
      }
    } else {
      swichNetworkHandler()
    }
  }
  useEffect(() => {
    if (location.search) {
      const ids = location.search.split('?')
      if (ids[1]) {
        getDetails(ids[1])
      }
    }
  }, [location])
  return (
    <Page title="The Defiants - Become part of our NFT revolution!">
      {/* <Box style={{
        background:"#180f07 "}}> */}
      {isLoading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Typography variant="h3" align="center" style={{ color: '#ccc' }}>
            Loading...
          </Typography>
          <ButtonCircularProgress />
        </Box>
      ) : (
        <>
          <Box className={classes.deatailimage}>
            <img
              src={
                nftDetails?.nfdData?.image
                  ? nftDetails?.nfdData.image
                  : 'images/gallery/1.png'
              }
              alt=""
            />
          </Box>
          <Box className={classes.Padding_Top} mb={7}>
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box className={classes.boxheading}>
                    <Typography variant="h3">
                      #{nftDetails?.id ? nftDetails?.id : ''} -{' '}
                      {nftDetails?.nfdData?.name
                        ? nftDetails?.nfdData?.name
                        : ''}{' '}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ wordBreak: 'break-all', color: '#f0f0f0' }}
                    >
                      <strong>Owned by: </strong>
                      {ownerOf ? ownerOf : ''}
                    </Typography>

                    {ownerOf &&
                      account &&
                      account.toLowerCase() === ownerOf.toLowerCase() && (
                        <Box className={classes.boxheading1}>
                          <Button
                            style={{
                              lineHeight: '25px',
                              border: 'none',
                              borderRadius: 'none',
                            }}
                            className={classes.filterbox}
                            variant="contained"
                            size="large"
                            color="secondary"
                            onClick={(e) => setOpen(true)}
                          >
                            <span>TRANSFER</span>
                          </Button>
                        </Box>
                      )}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box className={classes.boxheading}>
                    <Typography variant="h3"> Traits </Typography>
                    {nftDetails?.nfdData?.attributes.map((data, i) => {
                      return (
                        <Box className={classes.filterbox}>
                          <label>
                            {data?.trait_type ? data?.trait_type : ''}
                          </label>
                          <Typography variant="body1">
                            {data?.value ? data?.value : ''}
                          </Typography>
                        </Box>
                      )
                    })}
                  </Box>
                </Grid>
              </Grid>

              <Dialog
                style={{ background: 'rgb(12 12 13 / 40%)' }}
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {/* {"Use Google's location service?"} */}
                  {/* {"Connect Your Wallet?"} */}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-description"
                    style={{ maxWidth: '450px' }}
                  >
                    <label style={{ color: '#000' }} for="fname">
                      User Wallet Address{' '}
                    </label>

                    <input
                      className={classes.dialoginputbox}
                      type="text"
                      placeholder="0xx0000"
                      value={transferAddress}
                      disabled={isUpdate}
                      onChange={(e) => setTransferAddress(e.target.value)}
                    />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    style={{ color: '#000' }}
                    onClick={handleClose}
                    autoFocus
                    disabled={isUpdate}
                  >
                    Cancel
                  </Button>

                  <Button
                    onClick={transferFromHandler}
                    autoFocus
                    disabled={isUpdate || transferAddress === ''}
                  >
                    Transfer {isUpdate && <ButtonCircularProgress />}
                  </Button>
                </DialogActions>
              </Dialog>
            </Container>
          </Box>
        </>
      )}

      {/* </Box> */}
    </Page>
  )
}
export default Gallery
