import React, { useState, useEffect, useContext } from 'react'
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import Page from 'src/component/Page'
import GalleryImage from 'src/component/GalleryImage'
import { before } from 'lodash'
import { UserContext } from 'src/context/User'
import ButtonCircularProgress from 'src/component/ButtonCircularProgress'
const GalleryCard = [
  {
    image: 'images/gallery/1.png ',
    name: 'ABC  ',
    number: '#0 ',
  },
  {
    image: 'images/gallery/2.png ',
    name: 'ABC  ',
    number: '#1 ',
  },
  {
    image: 'images/gallery/3.png ',
    name: 'ABC  ',
    number: '#2 ',
  },
  {
    image: 'images/gallery/4.png ',
    name: 'ABC  ',
    number: '#3 ',
  },
  {
    image: 'images/gallery/2.png ',
    name: 'ABC  ',
    number: '#4 ',
  },
  {
    image: 'images/gallery/1.png ',
    name: 'ABC  ',
    number: '#5 ',
  },
  {
    image: 'images/gallery/3.png ',
    name: 'ABC  ',
    number: '#6 ',
  },
  {
    image: 'images/gallery/4.png ',
    name: 'ABC  ',
    number: '#7 ',
  },
]
const useStyles = makeStyles((theme) => ({
  Padding_Top: {
    paddingTop: '50px',
    paddingBottom: '55px',
    // backgroundColor: "#fff",
  },
  dialogBox: {
    padding: '30px',
  },
  walletPage: {
    // backgroundColor:"black",
    '& h4': {
      fontSize: '45px',
      fontWeight: '600',
      color: '#FFFFFF',
      marginBottom: '30px',
      [theme.breakpoints.down('lg')]: {
        fontSize: '40px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '30px',
      },
    },
    '& p': {
      fontWeight: '500',
      fontSize: '17px',
      lineHeight: '27px',
      color: '#cecece8',

      '& span': {
        color: '#ec0066',
        cursor: 'pointer',
      },
    },
  },
  filter: {
    boxShadow: 'white 0px 5px 8px',
    border: '2px solid rgb(251 16 56)',
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: 'white',
    '& h5': {
      // color: "#300760",
      color: '#00ffff',
      marginBottom: ' 10px',
      fontWeight: ' 700',
      fontSize: '37px',
    },
    '& span': {
      fontSize: '18px',
      fontWeight: '500',
    },
  },
  formControl: {
    '& span': {
      color: 'blue',
    },
    '.MuiPopover-paper': {
      backgroundColor: 'green',
    },
  },
}))
function Gallery(props) {
  const classes = useStyles()
  const user = useContext(UserContext)
  const [galaryData, setGalleryData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filterData, setFilterData] = React.useState({
    charactertype: 'Alien(rare)-1091',
    characterBody: 'Alien',
    character: 'Alien',
    eyeColor: 'Black',
    skinColor: 'Blue',
    assets: 'Axe',
    background: 'AbstractHippie',
  })

  const handleChange = (event) => {
    const name = event.target.name
    const temp = {
      ...filterData,
    }
    temp[name] = event.target.value
    setFilterData(temp)
  }

  useEffect(() => {
    if (user.allNftList) {
      setGalleryData(user.allNftList)
      setIsLoading(user?.isLoadingAllNFT)
    }
  }, [user.allNftList, user?.isLoadingAllNFT])

  return (
    <Page
      style={{ backgroundColor: '000' }}
      title="The Defiants - Become part of our NFT revolution!"
    >
      <Box style={{ backgroundColor: '#000' }} className={classes.Padding_Top}>
        <Container maxWidth="lg">
          <Box className={classes.walletPage}>
            <Typography variant="h4" align="center">
              Gallery
            </Typography>
            <Typography
              style={{ color: '#cecece' }}
              variant="body1"
              align="center"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
              Lorem Ipsum is simply dummy
            </Typography>
          </Box>
          <Box mt={6} mb={6}>
            <Typography
              variant="body1"
              style={{
                fontWeight: '500',
                fontSize: '18px',
                marginTop: '20px',
                color: '#fff',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              16384 Metaarts with these filters. 16384 in total.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <Box className={classes.filter}>
                  <Typography variant="h5">Filter</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={12}>
                      <Box className={classes.formControl1} mb={2}>
                        <span style={{ color: 'rgb(251 16 56)' }}>
                          Character Type
                        </span>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={filterData.charactertype}
                            onChange={handleChange}
                            fullWidth
                            name="charactertype"
                          >
                            <MenuItem value="">
                              <em style={{ color: 'rgb(251 16 56)' }}>
                                Charactertype
                              </em>
                            </MenuItem>
                            <MenuItem value="Alien(rare)-1091">
                              {' '}
                              Alien(rare)-1091{' '}
                            </MenuItem>
                            <MenuItem value=" Female(c)-6679">
                              {' '}
                              Female(c)-6679
                            </MenuItem>
                            <MenuItem value=" Male(c)-7759 ">
                              {' '}
                              Male(c)-7759{' '}
                            </MenuItem>
                            <MenuItem value=" Mummy(med)-2235-15=2220 ">
                              {' '}
                              Mummy(med)-2235-15=2220{' '}
                            </MenuItem>
                            <MenuItem value=" Robot(med)-3300 ">
                              {' '}
                              Robot(med)-3300{' '}
                            </MenuItem>
                            <MenuItem value=" Trashman(rare)-56 ">
                              {' '}
                              Trashman(rare)-56{' '}
                            </MenuItem>
                            <MenuItem value=" Unicorn(rare)-15 ">
                              {' '}
                              Unicorn(rare)-15{' '}
                            </MenuItem>
                            <MenuItem value=" WoodenMan(Med)-1136 ">
                              {' '}
                              WoodenMan(Med)-1136{' '}
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={12}>
                      <Box mb={2}>
                        <span style={{ color: 'rgb(251 16 56)' }}>
                          Character Body
                        </span>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined1"
                            value={filterData.characterBody}
                            onChange={handleChange}
                            fullWidth
                            name="characterBody"
                          >
                            <MenuItem value="">
                              <em style={{ color: 'rgb(251 16 56)' }}>
                                CharacterBody
                              </em>
                            </MenuItem>
                            <MenuItem value="Alien"> Alien </MenuItem>
                            <MenuItem value=" Animal"> Animal</MenuItem>
                            <MenuItem value="Clown ">Clown </MenuItem>
                            <MenuItem value=" EuropeanDragon ">
                              {' '}
                              EuropeanDragon{' '}
                            </MenuItem>
                            <MenuItem value=" FatMan "> FatMan </MenuItem>
                            <MenuItem value=" ForestSpirit ">
                              {' '}
                              ForestSpirit{' '}
                            </MenuItem>
                            <MenuItem value=" Girl "> Girl </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={6} md={12}>
                      <Box mb={2}>
                        <span style={{ color: 'rgb(251 16 56)' }}>
                          Character
                        </span>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined2"
                            value={filterData.character}
                            onChange={handleChange}
                            fullWidth
                            name="character"
                          >
                            <MenuItem value="">
                              <em style={{ color: 'rgb(251 16 56)' }}>
                                Character
                              </em>
                            </MenuItem>
                            <MenuItem value="Alien"> Alien </MenuItem>
                            <MenuItem value=" Animal"> Animal</MenuItem>
                            <MenuItem value="Clown ">Clown </MenuItem>
                            <MenuItem value=" EuropeanDragon ">
                              {' '}
                              EuropeanDragon{' '}
                            </MenuItem>
                            <MenuItem value=" FatMan "> FatMan </MenuItem>
                            <MenuItem value=" ForestSpirit ">
                              {' '}
                              ForestSpirit{' '}
                            </MenuItem>
                            <MenuItem value=" Girl "> Girl </MenuItem>
                            <MenuItem value=" GirlMime "> GirlMime </MenuItem>
                            <MenuItem value=" InsectSuperhero ">
                              {' '}
                              InsectSuperhero{' '}
                            </MenuItem>
                            <MenuItem value=" Jailer "> Jailer </MenuItem>
                            <MenuItem value=" JapaneseDemonOni ">
                              {' '}
                              JapaneseDemonOni{' '}
                            </MenuItem>
                            <MenuItem value=" JapaneseDragon ">
                              {' '}
                              JapaneseDragon{' '}
                            </MenuItem>
                            <MenuItem value=" Man "> Man </MenuItem>
                            <MenuItem value=" Mummy "> Mummy </MenuItem>
                            <MenuItem value=" Robot "> Robot </MenuItem>
                            <MenuItem value=" Shaman "> Shaman </MenuItem>
                            <MenuItem value=" TrashMan "> TrashMan </MenuItem>
                            <MenuItem value=" Stalker "> Stalker </MenuItem>
                            <MenuItem value=" Unicorn "> Unicorn </MenuItem>
                            <MenuItem value=" Witch "> Witch </MenuItem>
                            <MenuItem value=" WoodenMan "> WoodenMan </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={6} md={12}>
                      <Box mb={2}>
                        <span style={{ color: 'rgb(251 16 56)' }}>
                          EyeColor
                        </span>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined3"
                            value={filterData.eyeColor}
                            onChange={handleChange}
                            fullWidth
                            name="eyeColor"
                          >
                            <MenuItem value="">
                              <em style={{ color: 'rgb(251 16 56)' }}>None</em>
                            </MenuItem>
                            <MenuItem value="Black"> Black </MenuItem>
                            <MenuItem value=" Blue"> Blue</MenuItem>
                            <MenuItem value="Brown ">Brown </MenuItem>
                            <MenuItem value=" Green "> Green </MenuItem>
                            <MenuItem value=" Orange "> Orange </MenuItem>
                            <MenuItem value=" Pink "> Pink </MenuItem>
                            <MenuItem value=" Red "> Red </MenuItem>
                            <MenuItem value=" White "> White </MenuItem>
                            <MenuItem value=" Yellow "> Yellow </MenuItem>
                            <MenuItem value=" Unidentified ">
                              {' '}
                              Unidentified{' '}
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={6} md={12}>
                      <Box mb={2}>
                        <span style={{ color: 'rgb(251 16 56)' }}>
                          SkinColor
                        </span>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined5"
                            value={filterData.skinColor}
                            onChange={handleChange}
                            fullWidth
                            name="skinColor"
                          >
                            <MenuItem value="">
                              <em style={{ color: 'rgb(251 16 56)' }}>Brown</em>
                            </MenuItem>
                            <MenuItem value="Blue"> Blue </MenuItem>
                            <MenuItem value=" Bone"> Bone</MenuItem>
                            <MenuItem value="Dark ">Dark </MenuItem>
                            <MenuItem value=" Fair "> Fair </MenuItem>
                            <MenuItem value=" Green "> Green </MenuItem>
                            <MenuItem value=" Orange "> Orange </MenuItem>
                            <MenuItem value=" Red "> Red </MenuItem>
                            <MenuItem value=" GirlMime "> GirlMime </MenuItem>
                            <MenuItem value=" Steel "> Steel </MenuItem>
                            <MenuItem value=" Violet "> Violet </MenuItem>
                            <MenuItem value=" Wood "> Wood </MenuItem>
                            <MenuItem value=" Yellow "> Yellow </MenuItem>
                            <MenuItem value=" Unidentified ">
                              {' '}
                              Unidentified{' '}
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={6} md={12}>
                      <Box mb={2}>
                        <span style={{ color: 'rgb(251 16 56)' }}>Assets</span>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined5"
                            value={filterData.assets}
                            onChange={handleChange}
                            fullWidth
                            name="assets"
                          >
                            <MenuItem value="">
                              <em style={{ color: 'rgb(251 16 56)' }}>Brown</em>
                            </MenuItem>
                            <MenuItem value="Axe"> Axe </MenuItem>
                            <MenuItem value=" Ball"> Ball</MenuItem>
                            <MenuItem value="Cat ">Cat </MenuItem>
                            <MenuItem value=" Chess Board ">
                              {' '}
                              Chess Board{' '}
                            </MenuItem>
                            <MenuItem value=" Crown "> Crown </MenuItem>
                            <MenuItem value=" Diamond "> Diamond </MenuItem>
                            <MenuItem value=" Headphone "> Headphone </MenuItem>
                            <MenuItem value=" Mobile Phone ">
                              {' '}
                              Mobile Phone{' '}
                            </MenuItem>
                            <MenuItem value=" Phoenix Bird ">
                              {' '}
                              Phoenix Bird{' '}
                            </MenuItem>
                            <MenuItem value=" Raven "> Raven </MenuItem>
                            <MenuItem value=" Smoking Pipe ">
                              {' '}
                              Smoking Pipe{' '}
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={6} md={12}>
                      <span style={{ color: 'rgb(251 16 56)' }}>
                        Background
                      </span>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined6"
                          value={filterData.background}
                          onChange={handleChange}
                          fullWidth
                          name="background"
                        >
                          <MenuItem value="">
                            <em style={{ color: 'rgb(251 16 56)' }}>None</em>
                          </MenuItem>
                          <MenuItem value="AbstractHippie">
                            {' '}
                            AbstractHippie{' '}
                          </MenuItem>
                          <MenuItem value=" Aesthetics"> Aesthetics</MenuItem>
                          <MenuItem value="African ">African </MenuItem>
                          <MenuItem value=" Ancient Embroidery ">
                            {' '}
                            Ancient Embroidery{' '}
                          </MenuItem>
                          <MenuItem value=" Ancient Wall Runes ">
                            {' '}
                            Ancient Wall Runes{' '}
                          </MenuItem>
                          <MenuItem value=" DecorativeTribal ">
                            {' '}
                            DecorativeTribal{' '}
                          </MenuItem>
                          <MenuItem value=" Geometric Ornament With African Motifs ">
                            {' '}
                            Geometric Ornament With African Motifs{' '}
                          </MenuItem>
                          <MenuItem value=" Japanese "> Japanese </MenuItem>
                          <MenuItem value=" Magic Symbol ">
                            {' '}
                            Magic Symbol{' '}
                          </MenuItem>
                          <MenuItem value=" Norway Rune ">
                            {' '}
                            Norway Rune{' '}
                          </MenuItem>
                          <MenuItem value=" Modern Style ">
                            {' '}
                            Modern Style{' '}
                          </MenuItem>
                          <MenuItem value=" Wall Drawings ">
                            {' '}
                            Wall Drawings{' '}
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Grid container spacing={3}>
                  {galaryData &&
                    galaryData.map((data, i) => {
                      return (
                        <Grid item xs={6} sm={2} md={4} key={i}>
                          <GalleryImage data={data} index={i} />
                        </Grid>
                      )
                    })}
                  {!isLoading && galaryData && galaryData.length === 0 && (
                    <Box width="100%" textAlign="center">
                      <Typography
                        variant="h3"
                        align="center"
                        style={{ color: '#ccc' }}
                      >
                        No data found!!
                      </Typography>
                    </Box>
                  )}
                  {isLoading && (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                    >
                      <Typography
                        variant="h3"
                        align="center"
                        style={{ color: '#ccc' }}
                      >
                        Loading...
                      </Typography>
                      <ButtonCircularProgress />
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Page>
  )
}

export default Gallery
