import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import IconButton from "@mui/material/IconButton"
import LinkIcon from '@mui/icons-material/Link';
import { HiLink } from "react-icons/hi"

import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaEtsy } from "react-icons/fa"

// Analytics components
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import customerIo from '@analytics/customerio'



const profiles = {
  // youtube: {
  //   name: "YouTube",
  //   desc: "My videos",
  //   url: "https://www.youtube.com/channel/UCCIFp-Se_xjfYc94H04oK7Q",
  //   icon: <FaYoutube />,
  // },
  github: {
    name: "GitHub",
    desc: "My open-source projects",
    url: "https://github.com/mbtammi",
    icon: <FaGithub />,
  },
  linkedin: {
    name: "LinkedIn",
    desc: "My professional profile",
    url: "https://www.linkedin.com/in/miro-tammi-701bb3205/",
    icon: <FaLinkedin />,
  },
  instagram: {
    name: "Instagram",
    desc: "@mirotammi",
    url: "https://www.instagram.com/mirotammi/",
    icon: <FaInstagram />,
  },
  etsy: {
    name: "Etsy store",
    desc: "Printable art",
    url: "https://www.etsy.com/fi-en/shop/PrintNordic?ref=shop_sugg_market",
    icon: <FaEtsy />
  }
  // hevyapp: {
  //   name: "Hevy",
  //   desc: "Code 'BRIANRUIZ' for 20% off",
  //   url: "https://hevyapp.com?ref=brianruiz",
  //   icon: <GiWeightLiftingUp />,
  // }
}

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

    /* Initialize analytics */
const analytics = Analytics({
  app: 'mtemedia',
  version: 100,
  plugins: [
    googleAnalytics({
      trackingId: 'G-SVBWR0FNVK',
    }),
    customerIo({
      siteId: '123-xyz'
    })
  ]
})

/* Track a page view */
analytics.page()

  return (
    <Layout
      location={location}
      title={
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          size="small"
          sx={{
            mr: 1,
            backgroundColor: "action.selected",
            color: "text.primary",
          }}
        >
          <HiLink  fontSize={20}/>
        </IconButton>
        {"Miro's Links"}
      </Box>
      }
    >
      <Seo title={"Links"} />
      <Container
        maxWidth="string"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "692px",
          "@media (max-width: 600px)": {
            px: "1.5rem",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="nav tabs example"
            value={2}
            sx={{
              "& .MuiTabs-flexContainer": {
                gap: "1rem",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "text.primary",
                height: "1px",
              },
            }}
          >
            <Tab
              label="Blog"
              active
              component="a"
              href="/"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="Gear List"
              active
              component="a"
              href="/gear"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="My Links"
              component="a"
              href="/links"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="Code Portfolio"
              component="a"
              href="/code"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
          </Tabs>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {Object.keys(profiles).map(key => {
            const profile = profiles[key]
            return (
              <Button
                key={profile.name}
                href={profile.url}
                target="_blank"
                variant="outlined"
                fullwidth
                size="large"
                endIcon={profile.icon}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderColor: "text.disabled",
                  borderRadius: 6,
                  color: "text.primary",
                }}
              >
                {profile.name}
                {profile.desc && (
                  <Typography
                    variant="caption"
                    sx={{ textTransform: "none", color: "text.disabled" }}
                  >
                    {profile.desc}
                  </Typography>
                )}
              </Button>
            )
          })}
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
