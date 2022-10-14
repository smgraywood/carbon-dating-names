import { Grid } from "@mui/material";
import React, {useState} from "react"


const HelperText = ({isHovering}) => {
    return (
        <Grid>
        {isHovering && (
        <p className="small-text-window" id="names-info-window">
        <b>
            If adding multiple names, please do not add
            spaces between commas and names.{" "}
        </b>
        <br />
            Example: Sarah,Martin,Nate <br />
            NOT Sarah, Martin, Nate
        </p>             
        )}    
        </Grid>
    );
};


export default HelperText;