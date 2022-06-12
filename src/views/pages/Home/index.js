import React from 'react'
import { Box } from '@material-ui/core'
import Page from 'src/component/Page'
import Banner from './Banner'
import WhatTechnologies from './WhatTechnologies'
import PublicMint from './PublicMint'
import Team from './Team'

function Home(props) {
  return (
    <Page title="Become part of our NFT revolution!">
      <Box>
        <Banner />
        <WhatTechnologies />
        {/* <PublicMint /> */}
        <Team />
      </Box>
    </Page>
  )
}
export default Home
