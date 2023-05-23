import { Typography } from "@mui/material";
export default function About(props) {
    console.log("It's About");
    return (
        <>
            <Typography variant='h5'> {props.name} Page.</Typography>
        </>
    );
}