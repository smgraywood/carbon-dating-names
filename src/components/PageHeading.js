import React from "react";
import  Typography from "@mui/material/Typography";

const PageHeading = ({heading, subHeading}) =>{

    return(
        <>
        {heading ? (
            <Typography variant="h1">{heading}</Typography>
        ) :null}
        {subHeading ? (
            <Typography variant="h6">{subHeading}</Typography>
        ) :null}
        </>
    )
};

export default PageHeading;