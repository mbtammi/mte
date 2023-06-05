import * as React from "react"
import { Link } from "gatsby"

import ContactDrawer from "./ContactDrawer"
import SearchDialog from "./search/search-dialog"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SearchIcon from "@mui/icons-material/Search"

export default function RightDrawer({ isRootPath, ThemeButton }) {
  const [state, setState] = React.useState({
    bottom: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "80px",
        borderRight: "1px solid",
        borderColor: "divider",
        padding: "2.5rem 0",
        position: "sticky",
        top: 0,
        "@media (max-width: 1080px)": {
          display: "none",
        },
      }}
    >
      <Box>
        <IconButton
          sx={{ color: "text.primary" }}
          size="small"
          component={Link}
          to="/"
        >
<svg width="30" height="30" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet">
  <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m14.035 44.508h-5.65V26.882c0-.564.008-1.355.02-2.372c.014-1.018.02-1.802.02-2.353l-5.498 24.351h-5.893l-5.459-24.351c0 .551.006 1.335.02 2.353c.014 1.017.02 1.808.02 2.372v19.626h-5.65V17.492h8.824l5.281 22.814l5.242-22.814h8.725v29.016z" fill="#000000"></path>
</svg>
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Tooltip title="Home" placement="right" arrow>
          <IconButton component={Link} to="/">
            {isRootPath ? (
              <HomeIcon sx={{ color: "text.primary" }} />
            ) : (
              <HomeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <React.Fragment>
          <Tooltip title="Search" placement="right" arrow>
            <IconButton onClick={handleClickOpen}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <SearchDialog
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
          />
        </React.Fragment>
        <React.Fragment>
          <Tooltip title="Contact" placement="right" arrow>
            <IconButton onClick={toggleDrawer("bottom", true)}>
              <AlternateEmailOutlinedIcon />
            </IconButton>
          </Tooltip>
          <ContactDrawer
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
          />
        </React.Fragment>
        {ThemeButton}
      </Box>
      <Box>
        <Avatar
          alt="Miro Tammi"
          src="https://media.licdn.com/dms/image/C4E03AQHDHrREVQNP_w/profile-displayphoto-shrink_800_800/0/1639561336256?e=1684368000&v=beta&t=zyFw1Tms8QCg2m4i_OXmQIzuPHKRMLPALFOJgQbK4mA"
          sx={{ width: 32, height: 32, backgroundColor: "divider" }}
        >
          MT
        </Avatar>
      </Box>
    </Box>
  )
}
