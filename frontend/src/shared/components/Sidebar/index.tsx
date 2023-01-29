import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItemButton,
  useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { ReactNode } from 'react'

type SidebarProps = {
  children: ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const theme = useTheme()
  return (
    <>
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://avatars.githubusercontent.com/u/54086257?v=4"
            />
          </Box>
          <Divider />
          <Box flex="1">
            <List component="nav">
              <ListItemButton>menu</ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}

export default Sidebar
