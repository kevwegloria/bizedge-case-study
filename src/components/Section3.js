import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Section3() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '3em'

        }}>
            <Box sx={{
                backgroundColor: '#2898A4',
                width: '53em',
                textAlign: 'center',
                borderRadius: '10px',
                paddingTop: '1em',
                paddingBottom: '1.5em',
                '@media (max-width: 768px)': {
                    width: '21em',
                    paddingTop: '1.5em',
                    paddingBottom: '1.5em'

                },
               

            }}>
                <Typography
                    sx={{
                        color: 'white',
                        fontFamily: 'blacksansbold',
                        fontSize: '1.4em',
                        '@media (max-width: 768px)': {
                            fontSize: '1em',
                            fontFamily: 'blacksans',
                            fontWeight: 'bold'

                        },
                      

                    }}>Get your business on the Edge</Typography>
                <Typography
                    sx={{
                        color: 'white',
                        fontFamily: 'blacksans',
                        fontSize: '0.87em',
                        paddingTop: '0.5em',
                        paddingBottom: '1.5em',
                        '@media (max-width: 768px)': {
                            fontSize: '0.7em',
                            fontFamily: 'blacksans',


                        },
                    
                    }}>Let's get your business moving with no hassle</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1.4em',
                        '@media (max-width: 768px)': {
                            flexDirection: 'column'

                        }

                    }}>
                    <Button
                        sx={{
                            backgroundColor: 'white',
                            color: '#2898A4',
                            padding: '8px 60px',
                            fontFamily: 'blacksans',
                            textTransform: 'none',
                            fontSize: '0.7em',
                            fontWeight: 'bold',
                            border: '1px solid white',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#2898A4',
                            },
                            '@media (max-width: 768px)': {
                                padding: '8px 100px'


                            }
                        }}>Try for free</Button>
                    <Button
                        sx={{
                            color: 'white',
                            backgroundColor: '#2898A4',
                            padding: '8px 50px',
                            fontFamily: 'blacksans',
                            textTransform: 'none',
                            fontSize: '0.7em',
                            fontWeight: 'bold',
                            border: '1px solid white',
                            '@media (max-width: 768px)': {
                                padding: '8px 85px'


                            }
                        }}>Request a Demo</Button>
                </Box>
            </Box>
        </Box>
    )
}