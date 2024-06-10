import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo from './images/logo.png'

export default function Section6() {
    return (
        <Box sx={{
            display: 'none',
            '@media (max-width: 768px)': {
                display: 'block',
                paddingBottom: '3em',
                paddingTop: '3em',
                backgroundColor: '#fafafa'


            }
        }}>
            <Box>
                <img src={logo} alt={logo} style={{
                    paddingLeft: '2.3em',
                    height: '1.5em',
                }} />
                <Box sx={{
                    '@media (max-width: 768px)': {
                        display: 'flex',
                        justifyContent: 'space-around',
                        paddingTop: '1.5em'
                    }
                }}>
                    <Box >
                        <Typography
                            sx={{
                                fontFamily: 'blacksansblack',
                                color: '#171717',
                                paddingBottom: '1em'
                            }}>Home</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '3em'
                        }}>
                            <Link href="#"
                                sx={{
                                    textDecoration: 'none',
                                    color: '#333333',
                                    fontFamily: 'blacksans',
                                    fontSize: '0.8em',
                                    fontWeight: 600
                                }}>Pricing</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Term of Service</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Privacy Policy</Link>
                           
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'blacksansblack',
                                color: '#171717',
                                paddingBottom: '1em'
                            }}>Apps</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '3em'
                        }}>
                            <Link href="#"
                                sx={{
                                    textDecoration: 'none',
                                    color: '#333333',
                                    fontFamily: 'blacksans',
                                    fontSize: '0.8em',
                                    fontWeight: 600
                                }}>Human Resource</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Task App</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Time & Attendance</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Assets & Vehicle</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Payroll</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Accounting</Link>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{
                    '@media (max-width: 768px)': {
                        display: 'flex',
                        justifyContent: 'space-around',
                        paddingTop: '1.5em'
                    }
                }}>
                    <Box >
                        <Typography
                            sx={{
                                fontFamily: 'blacksansblack',
                                color: '#171717',
                                paddingBottom: '1em'
                            }}>Resources</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '3em'
                        }}>
                            <Link href="#"
                                sx={{
                                    textDecoration: 'none',
                                    color: '#333333',
                                    fontFamily: 'blacksans',
                                    fontSize: '0.8em',
                                    fontWeight: 600
                                }}>Help Center</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>FAQs</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Insights</Link>
                           
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'blacksansblack',
                                color: '#171717',
                                paddingBottom: '1em'
                            }}>Contact</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '3em'
                        }}>
                            <Link href="#"
                                sx={{
                                    textDecoration: 'none',
                                    color: '#333333',
                                    fontFamily: 'blacksans',
                                    fontSize: '0.8em',
                                    fontWeight: 600
                                }}>Get in touch</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Request a Demo</Link>
                           
                           
                          
                           
                        </Box>
                    </Box>

                </Box>
              

            </Box>
        </Box>
    )
}