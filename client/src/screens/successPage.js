import React from 'react'
import './commonStyle.css';
import textData from "../Static/Text.json";
const SuccessPage = () => {

    setTimeout( ()=>{
window.location.href='/'
    }, 5000 )

    return(
        <div>
         
                 <div className="success-animation">
<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
</div>

<div style={{
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'-5%'
}} >
<h3  style={{color: "#002D62"}}>{textData.Messages.name}</h3>
<h4 style={{ color: "#89CFF0" }}>{textData.Messages.reply}</h4>
</div>
        </div>
    )
}

export default SuccessPage