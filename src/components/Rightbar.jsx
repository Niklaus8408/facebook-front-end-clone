import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box
      flex={2} p={2}
      sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={8}>
          <Avatar alt="Joanna Nix" src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80" />
          <Avatar alt="Susy Mechelle" src="https://images.unsplash.com/photo-1615125946289-16298a82d3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=80" />
          <Avatar alt="Julian Van" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
          <Avatar alt="Alexander Hipps" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
          <Avatar alt="Kayla Maxx" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
          <Avatar alt="Candice Accola" src="https://images.unsplash.com/photo-1517171771326-cbc7f641008a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80" />
          <Avatar alt="Michelle Karl" src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=594&q=80" />
          <Avatar alt="Kayla Maxx" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
          <Avatar alt="Candice Accola" src="https://images.unsplash.com/photo-1517171771326-cbc7f641008a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80" />
          <Avatar alt="Michelle Karl" src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=594&q=80" />
        </AvatarGroup>

        <Typography
          variant='h6'
          fontWeight={100}
          mt={2} mb={2}>
          Latest Posts
        </Typography>

        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img alt="post-1" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/girlfriends-in-the-city-royalty-free-image-700702502-1563909138.jpg?crop=1.00xw:0.770xh;0,0.0864xh&resize=980:*" />
          </ImageListItem>

          <ImageListItem>
            <img alt="post-2" src="https://www.zurich.co.id/-/media/project/zwp/indonesia/images/5_shutterstock_1041475570-1.jpg?la=id-id&mw=1200&hash=CEA8B9EA8F438A1D9196EC45A229C2A1" />
          </ImageListItem>

          <ImageListItem>
            <img alt="post-3" src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11537/4a78f148-d427-4209-8173-f33d04c44106.jpg" />
          </ImageListItem>

          <ImageListItem>
            <img alt="post-4" src="https://images.unsplash.com/photo-1517171771326-cbc7f641008a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80" />
          </ImageListItem>

          <ImageListItem>
            <img alt="post-5" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
          </ImageListItem>

          <ImageListItem>
            <img alt="post-6" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
          </ImageListItem>
        </ImageList>

        <Typography
          variant='h6'
          fontWeight={100}
          mt={2}>
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1517171771326-cbc7f641008a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80" />
            </ListItemAvatar>
            <ListItemText
              primary="Candice King"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  </Typography>
                  {"I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
            </ListItemAvatar>
            <ListItemText
              primary="Kayla Maxx"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  </Typography>
                  {" Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar