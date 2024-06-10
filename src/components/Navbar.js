import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Hidden, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './images/Bizedge_ORIGINAL.png';



function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="absolute" sx={{
            backgroundColor: 'transparent', boxShadow: 'none', zIndex: '9999',
            '@media (max-width: 768px)': { boxShadow: 'none' },
        }}>
            <Toolbar sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '2em',
                backgroundColor: 'transparent'

            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: 1,
                   
                }}>
                    <Box sx={{
                        width: { xs: 'auto', md: '50%' },
                        paddingLeft: { md: '10em' },



                    }}>

                        <a href="#">
                            <img
                                src={logo}
                                alt='logo'
                                className='logo'
                                style={{ maxHeight: '50px', }}
                            />
                        </a>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: { xs: 'auto', md: '53%' },
                  


                }}>
                    <Hidden mdUp>
                        <IconButton
                            size="large"
                            edge="start"
                            color="#323232"
                            aria-label="menu"
                            onClick={handleMenuClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Request a Demo</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
                        </Menu>
                    </Hidden>

                    <Hidden mdDown>
                        <Button sx={{
                            mr: 5,
                            textTransform: 'none',
                            fontFamily: 'blacksansbold',
                            color: '#171717',
                            fontSize: '14px',
                            '&:hover': {
                               
                            }
                        }}>Home</Button>

                        <Button sx={{
                            textTransform: 'none',
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '14px',
                            marginRight: '4em',
                         
                            '&:hover': {
                               
                            }
                        }} >Request a Demo</Button>


                        <Button sx={{
                            textTransform: 'none',
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#2898A4',
                            fontSize: '14px',
                            padding: '4px 33px',
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: 'white'
                            }
                        }} >Sign In</Button>
                    </Hidden>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;
