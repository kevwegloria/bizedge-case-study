import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import terra from './images/7S9A2106-scaled 1.png';
import terra1 from './images/7S9A2106-scaled 1a.png'

export default function Section1() {
    return (
        <Box
            sx={{
                paddingTop: '4em',
                background: 'linear-gradient(to bottom, #ADE5EB 4%, #FFFFFF 100%)',
                '@media (max-width: 768px)': {
                    height: "25em",
                    background: 'linear-gradient(to bottom, #ADE5EB 4%, #FFFFFF 100%)'
                }
            }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                paddingTop: '0.5em',
                '@media (max-width: 768px)': {
                    flexDirection: 'column',
                }
            }}>
                <Box sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    alignItems: 'center',
                    '@media (max-width: 768px)': {
                        paddingTop: '2em',
                        paddingBottom: '2em',
                        width: '100%',
                    }
                }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '10%',
                            top: '20%',
                            transform: 'translate(-10%, -20%)',
                            '@media (max-width: 768px)': {
                                top: '130%',
                                left: '50%',
                                transform: 'translate(-50%, 0)',
                           
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            },
                        }}>
                        <Typography variant="h3"
                            sx={{
                                fontFamily: 'blacksansbold',
                                width: '100%',
                                fontSize: '2.4em',
                                paddingBottom: '1em',
                                '@media (max-width: 768px)': {
                                    fontSize: '1.3em',
                                    fontFamily: 'blacksansblack',
                                    textAlign: 'center',
                                    width: '12em',
                                 
                                
                                   
                                    
                                }
                            }}>Why TerraKulture switched to BizEdge</Typography>
                        <Typography
                            sx={{
                                fontFamily: 'blacksans',
                                fontSize: '12px',
                                color: '#545454',
                                width: '35em',
                                fontWeight: 'bold',
                                '@media (max-width: 768px)': {
                                    display: 'none'
                                }
                            }}>Terra Kulture is an independent educational and recreational organization dedicated to promoting the richness and diversity of Nigerian languages, arts, and culture. However, within their unique operational landscape, accurately tracking employee clock-in attendance has become a major hurdle.</Typography>
                        <Typography sx={{
                            display: 'none',
                            '@media (max-width: 768px)': {
                                fontSize: '0.8em',
                                fontFamily: 'blacksans',
                                width: '90%',
                                textAlign: 'center',
                                display: 'block',
                              
                                
                            }
                        }}>Do bookkeeping the modern way. Save time, Reduce paperwork, Remove spreadsheets. Manage your finances, easily and protect your data.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '50%',
                        paddingLeft: '2em',
                        paddingTop: '1em'
                    }}>
                    <Box sx={{
                        backgroundColor: 'white',
                        height: '20em',
                        borderTopLeftRadius: '60px',
                        position: 'relative',
                        display: 'block',
                        '@media (max-width: 768px)': {
                            display: 'none',
                        }
                    }}>
                        <Box>
                            <img
                                src={terra}
                                alt="terra"
                                className="terra"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    borderRadius: 'none',
                  
                    display: 'none',
                    '@media (max-width: 768px)': {
                        display: 'block',

                    }
                }}>
                    <Box>
                        <img
                            src={terra1}
                            alt="terra1"
                            className="terra1"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
