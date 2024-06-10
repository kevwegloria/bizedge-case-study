import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo2 from './images/logo2.png';
import google from './images/google.png';
import apple from './images/apple.png'

export default function Section5() {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fafafa',
            '@media (max-width: 768px)': {
                display: 'none'
            }
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
        
                paddingTop: '3em',
                paddingBottom: '2em',
                width: '53em'
            }}>
                <Box sx={{

                    display: 'flex',

                    justifyContent: 'space-between',
                    width: '57em',
                

                }}>
                    <Box>
                        <img
                            src={logo2}
                            alt="logo2"
                            className="logo2"
                        />
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <img
                                src={apple}
                                alt="apple"
                                className="apple" />
                            <img
                                src={google}
                                alt="google"
                                className="google" />
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'blacksansbold',
                                color: '#333333',
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
                                }}>Homepage</Link>
                            <Link href="#" sx={{
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
                                fontFamily: 'blacksansbold',
                                color: '#333333',
                                paddingBottom: '1em'
                            }}>Apps</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '3em'
                        }}>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Human Resources</Link>
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
                            }}>Payroll</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Assets & Vehicles</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Accounting</Link>
                        </Box>

                    </Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'blacksansbold',
                            color: '#333333',
                            paddingBottom: '1em'
                        }}>Resources</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '3em'
                        }}>
                            <Link href="#" sx={{
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
                        <Typography sx={{
                            fontFamily: 'blacksansbold',
                            color: '#333333',
                            paddingBottom: '1em'
                        }}>Contact</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '3em'
                        }}>
                            <Link href="#" sx={{
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