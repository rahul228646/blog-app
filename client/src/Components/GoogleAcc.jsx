import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import './googleacc.css'



export default function ResponsiveDialog(props) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const google = () => {
        window.open("http://localhost:4000/auth/google", "_self");
    };

    return (
        <div>
            <Button variant="none" onClick={handleClickOpen} disableFocusRipple disableRipple
                    sx={{borderRadius:'20px', color:"white", padding:'inherit'}}
            >
                {props.menubutton}
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                fullWidth
                maxWidth="sm"
                sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}
            >
            <IconButton aria-label="delete" size="large" onClick={handleClose} disableRipple sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "4%",
            }}>
                <CloseIcon fontSize="inherit" />
            </IconButton>

                <div className="LoginDialog">
                    <div className="LoginTitle">
                        {props.dialogtitle}
                    </div>
                    <Button startIcon={<GoogleIcon/>} variant="outlined"  color="primary" disableRipple
                            sx={{borderRadius:'20px', padding:"10px"}}
                            onClick={google}
                    >
                        {props.action} With Google
                    </Button>
                    <div className="LoginSubtitle">
                        {props.subtitle} <span>{props.subtitlespan}</span>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}