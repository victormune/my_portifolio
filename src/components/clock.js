import React from "react"


function Clock() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        textAlign:"center",
        color: "transparent",
        backgroundColor: "inherit",
        backgroundImage:"linear-gradient(to right, #f00, #0ff, #0f0,#00f)",
        backgroundClip: "text",
        animation:"animate 20s linear infinite",
        fontSize: "30px",
        fontFamily: 'Anton',
        marginTop: "0px",
        marginBottom:"0px",
        border:"20px solid inherit",
        width:"100%",
        
    }
        

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#000"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#000"
    }else {
        timeOfDay= "Evening"
        styles.color = "#ff0"
    }

    /*in line styling*/

    return(
        <h1 style = {styles}>Good {timeOfDay},thank you for looking at my resume.</h1>
    )
}
   
export default Clock