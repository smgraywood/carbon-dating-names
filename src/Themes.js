
import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Button } from "@mui/material";
// import Sofia from 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap';
// import Quicksand from 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap';


const theme = createTheme({
	palette:{
		primary: {
			main: '#71C5EB',
		},
		secondary: {
			main: blue[500]
		}
	},
    typography:{
        fontFamily: [
            'Pacifico',
            'Quicksand'
        ].join(','),
    h1: {
        fontFamily: 'Pacifico',
    },
    h6: {
        fontFamily: "'Quicksand', sans-serif",
    }
},   
});

export default theme;