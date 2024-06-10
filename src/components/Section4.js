import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import story1 from './images/image 25.png';
import story2 from './images/272035429_682724012880443_2800446078448495875_n 1.png';
import story3 from './images/image 11.png';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Section4() {
    return (
        <Box sx={{
            paddingBottom: '3em',
            backgroundColor: '#EFF5F4',
            paddingTop: '3em'
        }}>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontFamily: 'blacksansbold',
                    fontSize: '2.7em',
                    paddingBottom: '0.7em',
                    '@media (max-width: 768px)': {
                        fontFamily: 'blacksansblack',
                        fontSize: '1em'
                    }
                }}>More stories to explore...</Typography>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',



                }}>



                <Grid container spacing={1}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'grid',
                        gridTemplateColumns: 'auto auto auto',

                        '@media (max-width: 768px)': {
                            display: 'grid',
                            gridTemplateColumns: 'auto',
                            gap: '0.5em'
                         

                        },

                    }}
                >
                    <Grid item  >
                        <Paper sx={{
                            height: '24.5em',
                            width: '17.2em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',


                            '@media (max-width: 768px)': {
                                width: '20em',
                                marginLeft: '0.2em'

                            },



                        }}>
                            <img
                                src={story1}
                                alt="story1"
                                className="story1" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    marginBottom: '0.7em'
                                }}>Lagos, Nigeria</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'blacksansbold',
                                        fontSize: '1.2em',
                                        marginBottom: '0.7em',
                                        color: '#0A1329'
                                    }}>Zara Investments Capital (ZCI)</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '0.7em',
                                        width: '20em'
                                    }}>See how ZCI uses BizEdge centralized platform to streamline HR processes in their organization,  </Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        fontSize: '0.5em',
                                        marginBottom: '0.7em'
                                    }}>Time & Attendance</Typography>
                                <Box>
                                    <Link href="#" sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        textDecoration: 'none'
                                    }}>Watch Video</Link>
                                    <Link href="#" sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        textDecoration: 'none',
                                        marginLeft: '1em'
                                    }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>


                    <Grid item >
                        <Paper sx={{
                            height: '24.5em',
                            width: '17.2em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',
                           '@media (max-width: 768px)': {
                                width: '20em',
                                marginLeft: '0.2em'

                            },

                        }}>
                            <img
                                src={story2}
                                alt="story2"
                                className="story2" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '0.7em'
                                    }}>Abuja, Nigeria</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'blacksansbold',
                                        fontSize: '1.2em',
                                        marginBottom: '0.5em',
                                        color: '#0A1329'
                                    }}>Hareem Instanbul</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '0.7em',
                                        width: '22em'
                                    }}>See how Hareem Istanbul saves time with BizEdge by streamlining attendance & generating Reports in Minutes.</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        fontSize: '0.5em',
                                        marginBottom: '0.7em'
                                    }}>Time & Attendance</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none'
                                }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                            </Box>
                        </Paper>
                    </Grid>


                    <Grid item >
                        <Paper sx={{
                            height: '24.5em',
                            width: '17.2em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',
                           '@media (max-width: 768px)': {
                                width: '20em',
                                marginLeft: '0.2em'

                            },


                        }}>
                            <img
                                src={story3}
                                alt="story3"
                                className="story3" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '0.7em'
                                    }}>Lagos, Nigeria</Typography>
                                <Typography sx={{
                                    fontFamily: 'blacksansbold',
                                    fontSize: '1.2em',
                                    marginBottom: '0.7em',
                                    color: '#0A1329',
                                    width: '10em'
                                }}>Fox Business Development Ltd</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '0.7em'
                                    }}>See how Fox Business Development Ltd uses BizEdge to automate HR.</Typography>
                                <Typography sx={{
                                    color: '#545454',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '0.5em',
                                    marginBottom: '0.7em'
                                }}>Time & Attendance</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none',

                                }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                            </Box>
                        </Paper>
                    </Grid>


                </Grid>



            </Box>












        </Box>
    )
}