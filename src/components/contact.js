import React, { Component } from 'react'
import {Grid, Cell, ListItem, List, ListItemContent, Footer, FooterSection, FooterLinkList} from 'react-mdl'

export default class  extends Component {
    render() {
        return (
            <div> 
            <div className="contact-page">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Victor P Munengami</h2>
                        <img src="https://pbs.twimg.com/profile_images/1039103459168014336/U1WJVUqY_400x400.jpg" 
                        alt="profile"  style={{height: "325px", marginBottom:"20px", borderRadius:"10%"}} />
                        <p style={{marginTop:"10px", padding:"1em", width:"75%", margin:"auto", fontFamily:"Anton"}}>
                        An experienced IT and Telecommunications professional with a demonstrated history of working in the
                        IT & Telecommunications industry. Skilled in GSM Technologies,LTE , Network Design, 
                        Microwave and Network Surveillance & Monitoring tools
                        including Huawei U2000 and M2000, ZTE NetNumen(BSC and RNC), 
                        Network Administration(LAN and WAN monitoring 
                        systems such as SOLARWINDS & NAGIOS), Web Development(Python and JavaScript).
                        A member of Zimbabwe Institute of Engineers. 

                        </p>
                        
                        <hr/>

                    </Cell>
                    <Cell col={6}>
                            <h2>Contact Me</h2>
                            <hr/>

                            <div className="contact-list">

                            <List>

                            <ListItem>
                                <ListItemContent style={{fontFamily:"Anton", fontSize:"25px"}} >
                                   <i class="fa fa-phone-square" aria-hidden="true"></i>+263 73 2222 855</ListItemContent>
                            </ListItem>
                                
                            <ListItem>
                                    <ListItemContent style={{fontFamily:"Anton", fontSize:"25px"}}>
                                        <i class="fa fa-home" aria-hidden="true"></i>+263 77 3821 290</ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontFamily:"Anton", fontSize:"25px"}}>
                                    <i class="fa fa-envelope-square" aria-hidden="true"></i>vmunengami@yahoo.com</ListItemContent>
                            </ListItem>   
                            
                            <ListItem>
                                <ListItemContent style={{fontFamily:"Anton", fontSize:"25px"}}>
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>vmunengami@yahoo.com</ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontFamily:"Anton", fontSize:"25px"}}>
                                    <i class="fa fa-github-square" aria-hidden="true"></i>vmunengami@yahoo.com</ListItemContent>
                            </ListItem>

                            </List>

                            </div>



                    </Cell>
                </Grid>

                <div>
                <Footer size="mini" style={{backgroundColor:"grey", color:"white", alignItems:"center",width:"100%",
                 height:"1px", position:"absolute", marginTop:"150px"}}>
                    <FooterSection type="left" logo="">
                        <FooterLinkList>
                            <a href="/">Home</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>       
            </div>
                
            </div>
            
            </div>

            
        )

        
    }
}
