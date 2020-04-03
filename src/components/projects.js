import React, { Component } from 'react'
import {Tab, Tabs, Grid, Cell, Card, CardActions,CardMenu, IconButton, CardText, CardTitle,Button} from 'react-mdl';

export default class projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div><Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://technoguideinfo.com/wp-content/uploads/2019/05/html-css.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Codepen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="" />
                </CardMenu>
            </Card></div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div>
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Welcome</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Codepen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="" />
                </CardMenu>
            </Card>
                </div>
            )
        }else if(this.state.activeTab === 2){
        return(
            <div>
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://www.halilgulerweb.com/wp-content/uploads/2019/07/bootsrap-4-fiyat-tablosu.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Codepen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="" />
            </CardMenu>
        </Card>
            </div>
        )
        }
    }
        

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{color:"white"}}>HTML & CSS</Tab>
                    <Tab style={{color:"white"}}>REACT</Tab>
                    <Tab style={{color:"white"}}>BOOTSRAP 4</Tab>
                    <Tab style={{color:"white"}}>JavaScript</Tab>
                </Tabs>
                <section>
                    <div className="projects-grid">
                        <Grid className="projects-grid">
                            <Cell col={12}>
                                <div className="content">
                                {this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                        
                    </div>
                    
                </section>
                
            </div>
            
        )
    }
}
