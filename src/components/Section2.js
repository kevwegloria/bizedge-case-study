import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import vector from './images/Vector.png'

export default function Section2() {
    return (
        <Box sx={{
            display: 'flex',
            paddingTop: '8em',
            justifyContent: 'center',
            gap: '3.7em',
            '@media (max-width: 768px)': {
                flexDirection: 'column',
                paddingTop: '13em'
            }
        }}>
            <Box>
                <Box
                    sx={{
                        '@media (max-width: 768px)': {
                            paddingLeft: '1em'
                        }
                    }}>
                    <Typography
                        sx={{
                            fontFamily: 'blacksansbold',
                            fontSize: '1.7em',
                            paddingBottom: '0.3em',
                            '@media (max-width: 768px)': {

                                fontSize: '1.3em'
                            }
                        }}>The Challenge</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#545454',
                            width: '40em',
                            paddingBottom: '1.5em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '12px'
                            }
                        }}>As a multi-location business, Sandra Igwe HR for TerraKulture faced significant challenges in managing employee attendance. The organization's appraisals and bonuses are intricately tied to meticulous attendance records, which shape monthly and yearly performance evaluations.</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#545454',
                            width: '40em',
                            paddingBottom: '1.5em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '12px'
                            }
                        }}>Terra Kulture is an independent educational and recreational organization dedicated to promoting the richness and diversity of Nigerian languages, arts, and culture. However, within their unique operational landscape, accurately tracking employee clock-in attendance has become a major hurdle.
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#545454',
                            width: '39em',
                            paddingBottom: '5em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '12px'
                            }
                        }}>Like many diverse businesses, Terra Kulture encounters complexities in overseeing attendance records for a team engaged in various activities. From main office staff to individuals involved in educational programs, cultural events, and recreational activities, the distribution of roles across different facets of the organization poses challenges for seamless communication and attendance tracking.</Typography>
                </Box>

                <Box sx={{
                    marginBottom: '5em',
                    backgroundColor: '#f6f6f6',
                    borderLeft: '5px solid #2898A4',
                    position: 'relative',
                    height: '5.6em',
                    width: '28em',
                    zIndex: 'auto',
                    '@media (max-width: 768px)': {
                        width: '26.8em',
                        fontSize: '12px',
                        height: '8em',
                        marginLeft: '1.5em'

                    }

                }}>
                    <img
                        src={vector}
                        alt="vector"
                        className="vector"
                    />
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#545454',
                            width: '35em',
                            top: '1.8em',
                            left: '2.7em',
                            zIndex: '2',
                            position: 'absolute',
                            '@media (max-width: 768px)': {
                                width: '23em',
                                fontSize: '12px',
                                left: '2em'
                            }
                        }}>From main office staff to individuals on the field, Terra Kulture encountered complexities in overseeing attendance records.</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '8.5px',
                            fontWeight: 'bold',
                            color: '#545454',
                            left: '4.1em',
                            top: '7em',
                            position: 'absolute',
                            '@media (max-width: 768px)': {
                                display: 'none'
                            }

                        }}>Head of Human Resources</Typography>
                </Box>

                <Box sx={{
                    paddingBottom: '2.5em',
                    '@media (max-width: 768px)': {
                        paddingLeft: '1em'
                    }
                }}>
                    <Typography
                        sx={{
                            fontFamily: 'blacksansbold',
                            fontSize: '1.7em',
                            paddingBottom: '0.3em',
                            '@media (max-width: 768px)': {

                                fontSize: '1.3em'
                            }
                        }}>The Solution</Typography>
                    <Typography sx={{
                        fontFamily: 'blacksans',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#545454',
                        width: '40em',
                        paddingBottom: '1.5em',
                        '@media (max-width: 768px)': {
                            width: '27em',
                            fontSize: '12px'
                        }
                    }}>With BizEdge Attendance Management, Terra kulture can now track their employees’ arrival and closing time from their laptops or mobile devices.
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#545454',
                            width: '38em',
                            paddingBottom: '1.5em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '12px'
                            }
                        }}><span className="span1">MyEdge (Employee Self Service): </span>With just a tap, employees can simply clock in and clock out from assigned locations (onsite or remotely).</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#545454',
                            width: '40em',
                            paddingBottom: '1.5em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '12px'
                            }
                        }}><span className="span1">Shared location:</span> Employees on field work can also share their location in cases where the HR wants to view the locations.</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#545454',
                            width: '40em',
                            paddingBottom: '1.5em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '12px'
                            }
                        }}><span className="span1">Ease of Use: </span>BizEdge is an easy-to-use product. It’s intuitive, it’s easy to use for both low-tech and high-tech employees.</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#545454',
                            width: '40em',
                            paddingBottom: '1.5em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '12px'
                            }
                        }}><span className="span1">Implementation and Customer Support: </span>Onboarding was a breeze within the timeline given. The support team is responsive and the product is continually growing.</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#545454',
                            width: '40em',
                            paddingBottom: '1.5em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '12px'
                            }
                        }}><span className="span1">Leveraging other apps in the suite: </span>Signing up to the BizEdge app provided TerraKulture with other HR, Payroll and Productivity solutions in one place; Core HR, Payroll, Task Management,</Typography>
                </Box>
                <Box sx={{
                    paddingBottom: '5em',
                    '@media (max-width: 768px)': {
                        paddingLeft: '1em',
                        paddingBottom: '1em'
                    }
                }}>
                    <Typography
                        sx={{
                            fontFamily: 'blacksansbold',
                            fontSize: '1.7em',
                            paddingBottom: '0.3em',
                            '@media (max-width: 768px)': {

                                fontSize: '1.3em'
                            }
                        }}>The Result</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#545454',
                            width: '38em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '12px'
                            }
                        }}>Before BizEdge, Sandra Igwe, Terrakulture’s HR spent valuable time manually monitoring data, leading to inaccuracies. Since implementing BizEdge, average employee performance has im proved by up to 35%, allowing employees to be more punctual and productive. Managers now have oversight of accurate time tracking data, resulting in a reduction of her workload by over 10%, enabling her to focus on more important tasks.</Typography>
                </Box>

            </Box>
            <Box sx={{
                '@media (max-width: 768px)': {
                    paddingLeft: '1em',
                    paddingBottom: '1em'
                }
            }}>
                <Typography
                    sx={{
                        fontFamily: 'blacksansbold',
                        fontSize: '1em',
                        paddingBottom: '0.3em',
                        '@media (max-width: 768px)': {
                            paddingBottom: '1em'
                        }
                    }}>About TerraKulture</Typography>
                <Typography sx={{
                    fontFamily: 'blacksans',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#545454',
                    width: '26em',
                    paddingBottom: '0.5em',
                    '@media (max-width: 768px)': {
                        width: '24em',
                        fontSize: '12px'
                    }
                }}>Terra Kulture Arts and Studios Limited, headquartered in Lagos, was established in 2003 to celebrate Nigerian languages, arts, and culture. With employees spread across various states, they rely on BizEdge Attendance Management for precise attendance tracking.</Typography>
                <Typography
                    sx={{
                        fontFamily: 'blacksansbold',
                        fontSize: '1em',
                        paddingBottom: '0.3em'
                    }}>Industry</Typography>
                <Typography
                    sx={{
                        fontFamily: 'blacksans',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#545454',
                        paddingBottom: '0.5em'
                    }}>Tourism</Typography>
                <Typography
                    sx={{
                        fontFamily: 'blacksansbold',
                        fontSize: '1em',
                        paddingBottom: '0.3em'
                    }}>Location</Typography>
                <Typography
                    sx={{
                        fontFamily: 'blacksans',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#545454',
                        paddingBottom: '0.5em'
                    }}>Victoria Island, Lagos</Typography>
                <Typography
                    sx={{
                        fontFamily: 'blacksansbold',
                        fontSize: '1em',
                        paddingBottom: '0.3em'
                    }}>Company Size</Typography>
                <Typography
                    sx={{
                        fontFamily: 'blacksans',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#545454',
                        marginBottom: '1.5em'
                    }}>51 - 100 Employees</Typography>
                <Button
                    sx={{
                        padding: '8px 10px',
                        backgroundColor: '#2898A4',
                        textDecoration: 'none',
                        textTransform: 'none',
                        color: 'white',
                        fontFamily: 'blacksans',
                        fontSize: '11px',


                    }}>Download PDF Version</Button>
            </Box>
        </Box>
    )
}