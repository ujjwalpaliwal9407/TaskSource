import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Dialog,DialogContent} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Row, Col,Button,Container,Modal} from 'react-bootstrap';
import SimpleMap from './SimpleMap';
const styles = (theme) => ({
  // root: {
  //   margin: 0,
  //   padding: theme.spacing(2),
  //   overflowX:'hidden',
  // },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function India(props) {
  const [open, setOpen] = React.useState(false);
  const [value,setvalue]=React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
    <Button style={{backgroundColor:`${props.data.type}`,border:'none'}} onClick={()=>handleClickOpen(true)}><LocationOnIcon/> <span style={{fontSize:13,fontWeight:'bold'}}>India</span></Button>
      <Container fluid>
      <Dialog fullWidth
  maxWidth="sm" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Change Location
        </DialogTitle>
        <DialogContent>
        <div>
             <div className="modal-body" style={{marginTop:-20}}>
                     <Row><Button variant='danger'>Use current location</Button></Row>
                     <Row style={{marginRight:-95}}><label for="exampleInputEmail1"><b>Location *</b></label>
                         <input type="text" className="form-control" placeholder="Search"></input></Row>
                     <Row style={{marginRight:-95}}><label><b>Radius *</b></label>
                         <input type="number" className="form-control" placeholder="-Select-" value={`${value}`}></input> <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <span class="sr-only">Toggle Dropdown</span>
                         </button>
                         <div class="dropdown-menu">
                             <a className="dropdown-item" onClick={()=>setvalue()}>-Select-</a>
                             <a className="dropdown-item" onClick={()=>setvalue(5)}>5KM</a>
                             <a className="dropdown-item" onClick={()=>setvalue(10)}>10KM</a>
                             <a className="dropdown-item" onClick={()=>setvalue(15)}>15KM</a>
                             <a className="dropdown-item" onClick={()=>setvalue(20)}>20KM</a>
                         </div></Row>
                     <Row style={{marginRight:-95}}> 
                     <SimpleMap/>
                     </Row>
                 </div>
                 </div>
        </DialogContent>
        <DialogActions>
                <Button variant='danger'>Apply</Button>
        </DialogActions>
      </Dialog>
      </Container>
    </div>
  );
}


