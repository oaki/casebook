import { Box } from '@mui/material';

const Circles = () => (
    <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
        '& .circle': {
            position: 'absolute',
            borderRadius: '50%',
            opacity: 0.1,
        },
        '& .circle1': {
            width: '650px',
            height: '650px',
            backgroundColor: '#694DD5',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        '& .circle2': {
            width: '850px',
            height: '850px',
            backgroundColor: '#311F7D',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        '& .circle3': {
            width: '1050px',
            height: '1050px',
            backgroundColor: '#432183',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }
    }}>
        <div className="circle circle3"></div>
        <div className="circle circle2"></div>
        <div className="circle circle1"></div>
    </Box>
);

export default Circles;

