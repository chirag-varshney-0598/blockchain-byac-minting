import React, { useEffect, useState, useContext } from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  withStyles,
  TextField,
} from '@material-ui/core'

import PublicMint from './PublicMint'
import { useWeb3React } from '@web3-react/core'
import { mintAddress, ACTIVE_NETWORK } from 'src/constants'
import RezwanPodABI from 'src/constants/ABI/RezwanPodABI.json'
import { getWeb3Obj, getContract, swichNetworkHandler } from 'src/utils'
import { UserContext } from 'src/context/User'
import { toast } from 'react-toastify'
import moment from 'moment'
import ButtonCircularProgress from 'src/component/ButtonCircularProgress'

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: 'relative',
    background: 'transparent',
    // height: "90vh",
    padding: '80px 0',
    overflow: 'hidden',
    zIndex: ' 1',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
    '@media(max-width:960px)': {
      padding: '0',
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
    height: '70vh',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  marginleft: {
    marginLeft: '10px !important',
  },
  gridflex: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  textbox: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    '& h1': {
      fontSize: '50px',
      fontWeight: '600',
      color: '#ead7d2',
      [theme.breakpoints.down('lg')]: {
        fontSize: '50px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '30px',
      },
    },
    '& p': {
      fontSize: '16px',
      marginTop: '20px',
      color: '#fff ',
    },
    '@media(max-width:960px)': {
      marginTop: '-60px',
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

  buttonBox: {
    background: '#2E2A2A',
    padding: '23px',
  },

  buttonsection: {
    marginTop: '25px',
    borderRadius: '10px',
  },

  mint: {
    background: '#00ffff',
    // border: "1px solid #FFFFFF;",
    '@media(max-width:960px)': {
      marginTop: '-12px',
    },
  },

  mainsecion: {
    background: '#2E2A2A',
    padding: '0px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '10px',
  },

  quantityinput: {
    padding: '1px',
    color: '#fff',
    fontSize: '22px',
    width: '43px',
    height: '23px',
    background: '#2e2a2a',
    border: 'none',
  },

  amount: {
    margin: '80px 17px 40px 17px',
    borderRadius: '3px',
    '& label': {
      color: '#fff',
    },
  },
  quantity: {
    maxWidth: '100%',
    display: 'flex',
    height: '57px',
    border: '1px solid #00ffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '5px',

    '& input': {
      textAlign: 'center',
      backgroundColor: 'transparent',
      color: '#fff',
      border: 'none',
      fontSize: '15px',
      minWidth: '20px',
      maxWidth: '50px',
      '&:focus-visible': {
        outline: 'none',
      },
      '&::placeholder': {
        color: '#fff',
      },
    },

    '& button': {
      fontSize: '30px',
      // paddingTop: "20px",
      color: '#fff',
      '&:first-child': {
        color: '#00ffff;',
      },
      '&:last-child': {
        color: '#00ffff',
      },
    },
    textbox: {
      paddingLeft: '50px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '0px',
      },
      '& h1': {
        fontSize: '50px',
        fontWeight: '600',
        color: '#fff',
        [theme.breakpoints.down('lg')]: {
          fontSize: '50px',
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '30px',
        },
      },
      '& p': {
        fontSize: '14px',
        marginTop: '20px',
        color: '#fff ',
      },
    },
    '@media(max-width:770px)': {
      height: '42px',
    },
    '@media(max-width:370px)': {
      width: '50%',
    },
  },

  buttonsectionamount: {
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (max-width: 767px)': {
      marginTop: '0px',
      marginLeft: '5px',
      // padding: "34px",
    },
  },
  boxsec: {
    marginBottom: '45px',
    marginTop: '45px',
    '@media(max-width:770px)': {
      margin: '45px 9px 45px -7px',
    },
  },
  textsec: {
    '@media(max-width:960px)': {
      marginTop: '-40px',
    },
  },
  newgrid: {
    '@media(max-width:960px)': {
      marginTop: '-20px',
    },
  },
}))

// const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };

export default function BestSeller() {
  const classes = useStyles()
  const { library, account, chainId } = useWeb3React()
  const user = useContext(UserContext)
  const [numberofnft, setNumberofnft] = useState(1)
  const [userBalance, setUserBalance] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingAuth, setIsLoadingAuth] = useState(false)
  const [amount, setAmount] = useState(0)
  useEffect(() => {
    setAmount(numberofnft * user.nftPrice)
    setIsLoadingAuth(user?.isLoadingData)
  }, [numberofnft, user.nftPrice, user.isLoadingData])

  const mintNFT = async () => {
    if (chainId === ACTIVE_NETWORK) {
      if (
        Number(user?.totalSupply) + Number(numberofnft) <=
        Number(user?.MAX_NFT_SUPPLY)
      ) {
        if (Number(numberofnft) <= Number(user?.MAX_NFT_CAP)) {
          if (
            Number(user?.balanceOfValue) + Number(numberofnft) <=
            Number(user?.MAX_NFT_WALLET)
          ) {
            if (account && numberofnft && numberofnft !== '') {
              setIsLoading(true)
              try {
                const web3 = await getWeb3Obj()
                var balance = await web3.eth.getBalance(account)
                var walletBalance = await web3.utils.fromWei(balance.toString())

                if (parseFloat(walletBalance) > parseFloat(amount)) {
                  const contract = getContract(
                    mintAddress,
                    RezwanPodABI,
                    library,
                    account,
                  )
                  console.log('contract', contract)
                  // PUBLIC
                  if (user?.saleActive == 4) {
                    const mintNFTRes = await contract.mintNFT(numberofnft, {
                      value: web3.utils.toWei(amount.toString()),
                    })
                    await mintNFTRes.wait()
                    toast.success('Minted')
                  }
                  // Presale
                  else if (user?.saleActive == 3) {
                    const checkIfWhitelisted = await contract.checkIfWhitelisted(
                      account,
                    )
                    if (checkIfWhitelisted) {
                      const mintNFTRes = await contract.mintNFT(numberofnft, {
                        value: web3.utils.toWei(amount.toString()),
                      })
                      await mintNFTRes.wait()
                      toast.success('Minted')
                    } else {
                      toast.error('Address not whitelisted')
                    }
                  }
                  // SecondEBPresale
                  else if (user?.saleActive == 2) {
                    const checkIfWhitelisted = await contract.checkIfWhitelisted(
                      account,
                    )
                    if (checkIfWhitelisted) {
                      const secondEBSaleClaimed = await contract.secondEBSaleClaimed()

                      const firstEBSale = await contract.firstEBSale()
                      const secondEBSale = await contract.secondEBSale()
                      if (
                        Number(secondEBSaleClaimed.toString()) +
                          Number(numberofnft) <=
                        Number(firstEBSale.toString()) +
                          Number(secondEBSale.toString())
                      ) {
                        const mintNFTRes = await contract.mintNFT(numberofnft, {
                          value: web3.utils.toWei(amount.toString()),
                        })
                        await mintNFTRes.wait()
                        toast.success('Minted')
                      } else {
                        toast.error('Minting would exceed max supply')
                      }
                    } else {
                      toast.error('Address not whitelisted')
                    }
                  }
                  // SecondEBPresale
                  else if (user?.saleActive == 1) {
                    const checkIfWhitelisted = await contract.checkIfWhitelisted(
                      account,
                    )
                    if (checkIfWhitelisted) {
                      const firstEBSaleClaimed = await contract.firstEBSaleClaimed()

                      const firstEBSale = await contract.firstEBSale()

                      if (
                        Number(firstEBSaleClaimed.toString()) +
                          Number(numberofnft) <=
                        Number(firstEBSale.toString())
                      ) {
                        const mintNFTRes = await contract.mintNFT(numberofnft, {
                          value: web3.utils.toWei(amount.toString()),
                        })
                        await mintNFTRes.wait()
                        toast.success('Minted')
                      } else {
                        toast.error('Minting would exceed max supply')
                      }
                    } else {
                      toast.error('Address not whitelisted')
                    }
                  }
                } else {
                  toast.warn('Insufficient funds')
                }

                setIsLoading(false)
                user.getCurrentMintingDetails()
              } catch (error) {
                setIsLoading(false)
                console.log('ERRROR', error)
                toast.error(error.message)
              }
            } else {
              toast.error('Please select correct data')
              setIsLoading(false)
            }
          } else {
            toast.error(
              'Purchase exceeds max allowed per wallet in a transaction',
            )
          }
        } else {
          toast.error(
            'Purchase exceeds max allowed per wallet in a transaction',
          )
        }
      } else {
        toast.error('Minting would exceed max supply')
      }
    } else {
      swichNetworkHandler()
      setIsLoading(false)
    }
  }

  const getContractBalance = async () => {
    const web3 = await getWeb3Obj()
    const bal = await web3.eth.getBalance(mintAddress)
    let balance = await web3.utils.fromWei(bal)
    setUserBalance(balance)
  }

  useEffect(() => {
    getContractBalance()
  }, [])

  return (
    <Box className={classes.bannerBox}>
      <Container maxWidth="lg">
        <Grid
          style={{ marginBottom: '20px' }}
          container
          spacing={5}
          alignItems="flex-start"
          className={classes.gridflex}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className="bannerimageBox">
              <img
                src="images/banner.png"
                // className="banner1"
                style={{ width: '100%' }}
                alt="banner image"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={`${classes.textsec} wow bounceInUp`}
          >
            <Box textAlign="center">
              <Typography
                style={{ color: '#FFFFFF' }}
                variant="h2"
                className="text-white"
              >
                {`${user?.totalSupply} OF ${user?.MAX_NFT_SUPPLY} MINTED`}
              </Typography>
            </Box>

            <Box className={classes.textbox} mb={5}>
              <Box className={classes.amount}>
                <Grid container spacing={4} style={{ background: '#2e2a2a' }}>
                  <Grid item xs={12} sm={12}>
                    <Box>
                      <Grid container spacing={4} alignItems="center">
                        <Grid item xs={3}>
                          <label
                            style={{ paddingRight: '5px', marginTop: '10px' }}
                          >
                            Quantity:{' '}
                          </label>
                        </Grid>
                        <Grid item xs={9}>
                          <Box className={classes.mainsecion}>
                            <Box className={classes.quantity}>
                              <Button
                                variant="outline"
                                color="secondary"
                                size="small"
                                onClick={() => {
                                  if (numberofnft > 1) {
                                    setNumberofnft(numberofnft - 1)
                                  }
                                }}
                                disabled={isLoading}
                              >
                                -
                              </Button>
                              <input
                                style={{ width: '100%' }}
                                type="text"
                                placeholder={numberofnft}
                                readOnly
                              />
                              <Button
                                variant="outline"
                                color="secondary"
                                size="small"
                                onClick={() => {
                                  if (numberofnft < 11) {
                                    setNumberofnft(numberofnft + 1)
                                  }
                                }}
                                disabled={isLoading}
                              >
                                +
                              </Button>
                            </Box>
                            <Box className={classes.buttonsectionamount}>
                              <Button
                                style={{ marginRight: '10px' }}
                                variant="contained"
                                size="large"
                                color="secondary"
                                disabled={isLoading}
                                onClick={() => setNumberofnft(2)}
                              >
                                2
                              </Button>
                              <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                onClick={() => setNumberofnft(4)}
                                disabled={isLoading}
                              >
                                4
                              </Button>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={3} className={classes.newgrid}>
                          <label style={{ paddingRight: '5px' }}>
                            Total price:
                          </label>
                        </Grid>
                        <Grid item xs={6} sm={9} className={classes.newgrid}>
                          <label
                            style={{
                              paddingRight: '5px',
                              color: '#00ffff',
                            }}
                          >
                            {amount ? amount : '0'} ETH
                          </label>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.boxsec}>
                {account ? (
                  <Button
                    className={classes.mint}
                    variant="contained"
                    size="large"
                    color="secondary"
                    fullWidth
                    onClick={() => {
                      if (account) {
                        mintNFT()
                      } else {
                        toast.warn('Please connect your wallet')
                      }
                    }}
                    // disabled={isLoading || isLoadingAuth}
                    disabled={true}
                  >
                    MINT NOW {isLoading && <ButtonCircularProgress />}
                  </Button>
                ) : (
                  <Button
                    className={classes.mint}
                    variant="contained"
                    size="large"
                    color="secondary"
                    fullWidth
                    onClick={() => user.connectWallet()}
                  >
                    Connect Wallet
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">{/* <PublicMint user={user} /> */}</Container>
    </Box>
  )
}
