import React from "react";
import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from '../error-handeling/error-boundary.styles'
const Contact=()=>{
   
    return(
        <ErrorImageOverlay>
            <ErrorImageContainer imageUrl={"https://i.imgur.com/lKJiT77.png"}/>
            <ErrorImageText>A Dog Ate this Page</ErrorImageText>
        </ErrorImageOverlay>
    )

}
export default Contact;