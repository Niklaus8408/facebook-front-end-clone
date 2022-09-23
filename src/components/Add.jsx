import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});

function Add() {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Tooltip onClick={(e) => setOpen(true)}
                title="Add Post"
                sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30, lg: 70 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={500} height={280} p={3} bgcolor="white" borderRadius={5}>
                    <Typography variant='h6' color="gray" textAlign="center">
                        Create New Post
                    </Typography>

                    <UserBox>
                        <Avatar
                            src="./assets/avatar.jpg"
                            sx={{ width: 30, height: 30 }} />

                        <Typography variant='span' fontWeight={500}>
                            Aniket Tayade
                        </Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                    />

                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color="primary" />
                        <ImageIcon color="secondary" />
                        <VideoCameraBackIcon color="success" />
                        <PersonAddAlt1Icon color="error" />
                    </Stack>

                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRangeIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </Box>
    )
}

export default Add