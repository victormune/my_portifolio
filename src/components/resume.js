import React, { Component } from 'react'
import {Footer, FooterLinkList, FooterSection, Grid, Cell} from 'react-mdl'
import Clock from './clock'

export default class resume extends Component {
    render() {

        const styles = {
        
                background: "white",
                margin: "auto",
                width: "55.5%",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #efefef",
                padding: "60px",
              }

            return (
                <div><Clock /> 
                
                <div className="resume-page" style ={styles}>
                <Grid>

                    <Cell col={4}>
                    <img src="https://pbs.twimg.com/profile_images/1039103459168014336/U1WJVUqY_400x400.jpg" 
                    alt="profile" style={{borderRadius:"50%", marginLeft:"auto", 
                    marginRight:"auto", width:"180px", marginTop:"50px", marginBottom:"0px" }} />

                    <h1>Skills</h1>

                    <hr/>

                    <ul>

                    <li>JavaScript </li>
                    <li>Python <i class="fas fa-python   "></i></li>
                    <li>React <i class="fas fa-react    "></i></li>
                    <li>Cisco devices</li>
                    <li>Huawei devices</li>
                    <li>Network Administration </li>
                    <li>GSM, LTE technologies</li>
                    <li>MS Office packages <i class="fas fa-microsoft "></i> </li>
                    
                    </ul>

                    <hr/>

                    <h1>Personal Information</h1>

                    <hr/>

                    <ul>

                    <li>Address: 4599 127 Street Warren Park D, Harare, Zimbabwe </li>
                    <li><i class="fa fa-phone-square" aria-hidden="true"> Cell: +263732222855</i></li>
                    <li>Date of birth: 18 Dec 1987 </li>
                    <li>Nationality: Zimbabwean </li>
                    <li>Driving License: 2015 Clean Class 4 </li>
                    
                    </ul>

                     </Cell>

                    <Cell col={8}>
                    <h1>Proffesional Summary</h1>
                    <hr/>
                        <p>
                        An experienced IT and Telecommunications professional with a demonstrated history of working in the
                        IT & Telecommunications industry. Skilled in GSM Technologies,LTE , Network Design, Microwave and Network Surveillance & Monitoring tools
                        including Huawei U2000 and M2000, ZTE NetNumen(BSC and RNC), Network Administration(LAN and WAN monitoring 
                        systems such as SOLARWINDS & NAGIOS), Web Development(Python and JavaScript).
                         A member of Zimbabwe Institute of Engineers. 
                        </p>

                        <hr/>
                    
                    <h1>Work History</h1> 
                    <hr/>
                    <h2>NOC Technician: Telecel Zimbabwe, April 2014 to Date</h2>
                   
                    <ul>
                    <li>Network surveillance and Network Administration </li>
                    <li>BSC and RNC alarms monitoring </li>
                    <li>Core network administration (MSC,USN,GGSN and PCRF) </li>
                    <li>Debugging and troubleshooting of systems and network issues and customer faults on the following 2G/3G network elements: HLR, GGSN,SGSN, IN, BSCs,RNCs, SMS-C, MSC,MGW; </li>
                    <li>Support in activation of new sites, and new node integration. </li>
                    <li>Support in Acceptance Tests for new node integration. </li>
                    <li>Perform daily system database management and alarm monitoring. </li>
                    <li>Ensure availability of all active network nodes (Core, RAN, Transmission, IN and VAS) -1st line maintenance and support for all active network nodes. </li>
                    <li>Interface with 2nd line support on escalated issues and ensure timely resolution. </li>
                    <li>Support to resolve customer complaints. </li>
                    <li>Support in analyzing fault and investigating root cause. </li>
                    <li>Coordination of approved field activities.</li>
                    <li>Subscriber administration on the HLR</li>
                    </ul>   

                    <h2>Field Technician(Lead): PEK12(T.I.A) Zimbabwe,August 2012 to March 2013</h2>
                    
                    <ul>

                    <li>Installation of 2g/3g antennaes. </li>
                    <li>Laying of feeder cables and jumpers. </li>
                    <li>Preapration and termination of connectors.</li>
                    <li>Testing cables using the SITE MASTER(sweep tests for VSWR and DTF) </li>
                    <li>Installation of Huawei DBS 3900(Install battery banks, APM30, TMC cabinets)</li>
                    <li>Supervising junior technicians,riggers and technical assistants </li>
                    
                    </ul>

                    <hr/>

                    <h1>Education</h1>

                    <hr/>

                    <h2>Telone Centre For Learning,Aug 2010 – Aug 2012</h2>

                    <li>Diploma Telecommunications(Hexco) </li>

                    <h2>Muzinda Hub(Harare) & TreeHouse(USA)</h2>

                    <li>Certificate: Python <i class="fas fa-python " aria-hidden="true"> & Fullstack foundations</i></li>

                    
                    <hr/>

                    <h1>References</h1>

                    <hr/>
                    <br/>

                    <li>Cliford Magasu  </li>
                    <li>NOC Supervisor, Telecel Zimbabwe  </li>
                    <li>Email: cmagasu@telecelzim.co.zw </li>
                    <li>Phone: +263733432439 </li>

                    <br/>
                    <br/>

                    <li>Nathaniel Tigere  </li>
                    <li>Technical Manager, Telecel Zimbabwe  </li>
                    <li>Email: ntigere@telecelzim.co.zw </li>
                    <li>Phone: +263733474974 </li>

                    <br/>

                    </Cell>

                    

                </Grid>    

                    
                </div>
                <Footer size="mini" style={{backgroundColor:"inherit", color:"white", alignItems:"center"}}>
                <FooterSection type="left" logo="">
                        <FooterLinkList>
                            <a href="/resume">Back To Top</a>
                            <a href="/">Home</a>
                        </FooterLinkList>
                </FooterSection>
            </Footer>
                </div>    
            )
    }
}
