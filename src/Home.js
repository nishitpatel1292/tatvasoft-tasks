import image from './images/react.js-img.png'
import { Typography } from '@mui/material';
export default function Home(props){
    console.log("It's Home");
    return(
        <>
         <Typography variant='h5'> {props.name} Page.</Typography>

         <img src={image} alt="Description"
          style={{ display:'flex', width: '300px', height: 'auto', borderRadius: '5px' }}
         />
        </>
    );
}