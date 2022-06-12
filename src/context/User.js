import React, { createContext, useEffect, useState } from 'react'
import { injected } from 'src/connectors'
import { useWeb3React } from '@web3-react/core'
import { mintAddress, ACTIVE_NETWORK } from 'src/constants'
import RezwanPodABI from 'src/constants/ABI/RezwanPodABI.json'
import axios from 'axios'
import {
  getWeb3ContractObject,
  getWeb3Obj,
  getBalanceOf,
  getContract,
} from 'src/utils'
import { toast } from 'react-toastify'
export const UserContext = createContext()

const setSession = (userAddress) => {
  if (userAddress) {
    sessionStorage.setItem('userAddress', userAddress)
  } else {
    sessionStorage.removeItem('userAddress')
  }
}

export default function AuthProvider(props) {
  const { activate, account, library, chainId, deactivate } = useWeb3React()
  const [adminWalletAddress, setAdminWalletAddress] = useState('')
  const [hasFinalSaleStarted, setHasFinalSaleStarted] = useState(true)
  const [MAX_NFT_SUPPLY, setMAX_NFT_SUPPLY] = useState(0)
  const [nftPrice, setNftPrice] = useState(0)
  const [balanceOfValue, setBalanceOfValue] = useState(0)
  const [mintPercentage, setMintPercentage] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0)
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [userNFTList, setUserNFTList] = useState([])
  const [isLoadingAllNFT, setIsLoadingAllNFT] = useState(false)
  const [allNftList, setallNftList] = useState([])
  const [userNFtLoading, setUserNftLoading] = useState(false)
  const [saleActive, setSaleActive] = useState(0)
  const [MAX_NFT_CAP, setMAX_NFT_CAP] = useState(0)
  const [MAX_NFT_WALLET, setMAX_NFT_WALLET] = useState(0)

  const getContractDetailsHandler = async () => {
    try {
      setIsLoadingData(true)
      const web3 = await getWeb3Obj()
      const contractObj = await getWeb3ContractObject(RezwanPodABI, mintAddress)
      const adminAccount = await contractObj.methods.owner().call()
      setAdminWalletAddress(adminAccount)
      const MAX_NFT_CAPL = await contractObj.methods.MAX_NFT_CAP().call()
      setMAX_NFT_CAP(MAX_NFT_CAPL)
      const MAX_NFT_WALLETL = await contractObj.methods.MAX_NFT_WALLET().call()
      setMAX_NFT_WALLET(MAX_NFT_WALLETL)
      const saleActiveL = await contractObj.methods.saleActive().call()
      setSaleActive(saleActiveL)
      if (saleActiveL == 0) {
        setNftPrice(0)
        setHasFinalSaleStarted(false)
      }
      if (saleActiveL == 1 || saleActiveL == 2 || saleActiveL == 3) {
        const salePrice = await contractObj.methods.PRESALE_NFT_PRICE().call()
        setNftPrice(web3.utils.fromWei(salePrice))
      }
      if (saleActiveL == 4) {
        const salePrice = await contractObj.methods
          .PUBLICSALE_NFT_PRICE()
          .call()
        setNftPrice(web3.utils.fromWei(salePrice))
      }
      setIsLoadingData(false)
    } catch (err) {
      console.log(err)
      setIsLoadingData(false)
    }
  }
  const getCurrentMintingDetails = async () => {
    const contractObj = await getWeb3ContractObject(RezwanPodABI, mintAddress)
    if (account) {
      getBalanceOfFun()
    }
    const MAX_NFT_SUPPLY = await contractObj.methods.MAX_NFT_SUPPLY().call()
    setMAX_NFT_SUPPLY(Number(MAX_NFT_SUPPLY))
    const totalSupply = await contractObj.methods.totalSupply().call()
    setTotalSupply(Number(totalSupply))
    let per = (parseFloat(totalSupply) / parseFloat(MAX_NFT_SUPPLY)) * 100
    setMintPercentage(per)
  }

  const userNFTListHadler = async (balanceOf, cancelTokenSource) => {
    setUserNFTList([])
    setUserNftLoading(true)
    const contract = getContract(mintAddress, RezwanPodABI, library, account)

    try {
      for (let i = 0; i < balanceOf; i++) {
        const id = await contract.tokenOfOwnerByIndex(account, i)
        const filter = await contract.tokenURI(id.toString())

        const res = await axios.get(filter, {
          cancelToken: cancelTokenSource && cancelTokenSource.token,
        })
        if (res.status === 200) {
          setUserNFTList((prev) => [
            ...prev,
            { id: id.toString(), nfdData: res.data },
          ])
          setUserNftLoading(false)
        }
      }
    } catch (e) {
      console.log(e)
      setUserNftLoading(false)
    }
  }

  const allNFTListHandler = async (txaCount, cancelTokenSource) => {
    //eslint-disable-line no-unused-vars
    setIsLoadingAllNFT(true)
    const contract = await getWeb3ContractObject(RezwanPodABI, mintAddress)
    try {
      for (let i = 0; i < parseInt(txaCount); i++) {
        try {
          const tokenURI = await contract.methods.tokenURI(i.toString()).call()
          const res = await axios.get(tokenURI)
          if (res.status === 200) {
            setallNftList((prev) => [
              ...prev,
              { id: i.toString(), nfdData: res.data },
            ])
          }
        } catch (error) {
          console.log('ERROR', error)
        }
      }

      setIsLoadingAllNFT(false)
    } catch (error) {
      setIsLoadingAllNFT(false)

      console.log('ERROR', error)
    }
  }
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()
    if (totalSupply > 0) {
      allNFTListHandler(totalSupply, cancelTokenSource)
    }
  }, [totalSupply])
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()

    if (balanceOfValue > 0) {
      userNFTListHadler(balanceOfValue, cancelTokenSource)
    }
    return () => {
      cancelTokenSource.cancel()
    }
  }, [balanceOfValue, account])

  useEffect(() => {
    getContractDetailsHandler()
    getCurrentMintingDetails()
  }, [])

  useEffect(() => {
    if (account) {
      getBalanceOfFun()
    }
  }, [account]) //eslint-disable-line

  async function getBalanceOfFun() {
    setBalanceOfValue(await getBalanceOf(RezwanPodABI, mintAddress, account))
  }

  let data = {
    nftPrice,
    saleActive,
    MAX_NFT_CAP,
    hasFinalSaleStarted,
    adminWalletAddress,
    balanceOfValue,
    MAX_NFT_WALLET,
    MAX_NFT_SUPPLY,
    mintPercentage,
    totalSupply,
    isLoadingData,
    userNFTList,
    allNftList,
    userNFtLoading,
    isLoadingAllNFT,

    updateUser: (account) => {
      setSession(account)
    },
    connectWallet: () => connectToWallet(),
    disconnectWalletHandler: () => disconnectWalletHandler(),
    getCurrentMintingDetails: () => getCurrentMintingDetails(),
  }
  const connectToWallet = (data) => {
    const connector = injected
    window.sessionStorage.removeItem('walletName')
    window.sessionStorage.setItem('walletName', 'METAMASK')
    // setErrorMsg("");
    // setSuccessMSG("");
    if (connector && connector.walletConnectProvider?.wc?.uri) {
      connector.walletConnectProvider = undefined
    }
    activate(connector, undefined, true).catch((error) => {
      if (error) {
        console.log('error', error.message)
        // setErrorMsg(error.message + " Please install " + data.name);
        activate(connector)
        // setIsLoading(false);
        // setErrorPop(true);
      }
    })
  }
  useEffect(() => {
    if (account && chainId) {
      if (chainId !== ACTIVE_NETWORK) {
        if (window.ethereum) {
          swichNetworkHandler()
        }
      }
    }
  }, [chainId, account])
  const swichNetworkHandler = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x' + ACTIVE_NETWORK.toString(16) }],
      })
    } catch (error) {
      console.log('ERROR', error)

      toast.warn(error.message)
      // if (error.code === 4902) {
      //   addNetworkHandler();
      // }
    }
  }
  const disconnectWalletHandler = async () => {
    try {
      deactivate()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const userAddress = window.sessionStorage.getItem('userAddress')
    if (userAddress) {
      data.connectWallet()
    }
  }, []) //eslint-disable-line

  useEffect(() => {
    data.updateUser(account)
  }, [account]) //eslint-disable-line

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  )
}
