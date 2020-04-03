import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHaM0jSYHUr8w/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=A7g_JM5ucqFAN_GYlSwDExvz16naEgsR9hyBGi0p65w"
                        alt= "avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Front-end web developer</h1> 
                            
                            <hr/>

                            <p>HTML | CSS | JAVASCRIPT | REACT | BOOTSTRAP STUDIO 4 | PYTHON</p>
                            <p> JavaScript libraries(Fullpage.js/Rellax.js/Reveal.js)</p>
                        <div className="social-links">
                        {/* linkedin*/}
                            <a href="http://www.linkedin.com/in/victorp-mune1812/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                         {/*github*/}
                            <a href="http://github.com/victormune" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

