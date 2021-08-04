import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Dialog,DialogContent} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Row, Col,Button,Container,Image} from 'react-bootstrap';
import sideProfile from './images/modal-img.svg';
import google from './images/google.webp';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleLogin from 'react-google-login';
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
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

export default function Register(props) {
  const [email,setemail]=React.useState('');
  const [userName,setusername]=React.useState('');
  const [password,setpass]=React.useState('');
  const [open, setOpen] = React.useState(false);
  const [check,setValue]=React.useState(false);
  const [location,setlocation]=React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  async function register(){
    console.log(email,location,userName)
    let item={email,userName,location}
    let result=await fetch("https://www.givebaks.com/auth/register",{
      method:'POST',headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });
    result=await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    if(result.success==true||result.status==200){
      alert("successfully registered please check your mail to set password")
    }
    else{
      alert("registration failed")
    }
  }

  async function login()
  {
    console.log(email,password)
    let item={email,password}
    let result=await fetch("https://www.givebaks.com/auth/login",{
      method:'POST',headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });
    result=await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    if(result.success==true||result.status==200){
      alert("successfully logged in")
    }
    else{
      alert("login failed")
    }
  }
  const googleCall=()=>
  {
    <GoogleLogin clientId="1082478479887-mvvhqvmo3av9pq69bufqjgs0o1s4pbgq.apps.googleusercontent.com" buttonText="" onSuccess={responseGoogle} 
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
                console.log("calleddddddddddddddd")
  }
 const responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    // this.setState({
    //     loggin:true
    // })
}
  return (
    <div style={{marginRight:13}}>
    <Button fullWidth
  maxWidth="sm" style={{backgroundColor:`${props.data.type}`,border:'none'}} onClick={()=>handleClickOpen(true)}><AccountCircleIcon/> <span style={{fontSize:13,fontWeight:'bold'}}>Register / Log in</span></Button>
      <Container fluid>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Login
        </DialogTitle>
        <DialogContent>
        <div>

      {(check==true)?
        <div className="modal-body">
         <Row>
             <Col xs={12} md={6}>
             <div style={{height:'auto',backgroundColor:'darkblue',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',borderRadius:10}}>
                 <Row><Col xs={12} style={{marginTop:10}}><Image width='200px' src={sideProfile}></Image></Col></Row>
                 <Row>
                        <Col xs={12} style={{color:'white'}}><b>Welcome Back To
                        Deals.com</b></Col>
                 </Row>
                 <Row>
                     <Col xs={12}>
                            <div style={{height:5,width:60,backgroundColor:'brown',borderRadius:5}}></div>
                     </Col>
                 </Row>
                 <Row>
                        <Col xs={12}>
                            <div><span style={{color:'white'}}>Register to create your account</span></div>
                        </Col>
                 </Row>
                 <Row>
                     <Col style={{marginTop:30}}>
                     <Button variant='danger' onClick={()=>setValue(false)} style={{fontSize:10}}><b>Already have an account</b></Button>
                     </Col>
                 </Row>
            </div>
             </Col>
         
             <Col xs={12} md={6}>
             <div style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',borderRadius:10}}>
                <Row style={{marginTop:10}}>
                    <Col xs={6}><Button variant='primary'><FacebookIcon style={{borderRadius:'50%'}}/></Button></Col>
                    <Col xs={6}><Button variant='danger' onClick={()=>googleCall()}><Image height='20' width='20' src={google}></Image></Button></Col>
                </Row>
                <Row>
                    <Col xs={4}></Col><Col xs={4}>Or</Col><Col xs={4}></Col>
                </Row>
                <Row>
                <label><b>Username *</b></label>
                                         <input type="text" className="form-control" placeholder="Username" onChange={(e)=>setusername(e.target.value)}></input>
                </Row>
                <Row>
                <label><b>Email *</b></label>
                                         <input type="email" className="form-control" placeholder="Email" onChange={(e)=>setemail(e.target.value)}></input>
                </Row>
                <Row>
                <label><b>Location *</b></label>
                                         <input type="text" className="form-control" onChange={(e)=>setlocation(e.target.value)} placeholder="Search"></input>
                </Row>
                <Row>
                    <Button variant='danger' onClick={register}>register</Button>
                </Row>
                </div>
             </Col>
         </Row>   
                             
         </div>:<div className="modal-body">
         <Row>
             <Col xs={12} md={6}>
             <div style={{height:'auto',backgroundColor:'darkblue',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',borderRadius:10}}>
                 <Row><Col xs={12} style={{marginTop:10}}><Image width='200px' src={sideProfile}></Image></Col></Row>
                 <Row>
                        <Col xs={12} style={{color:'white'}}><b>Welcome Back To
                        Deals.com</b></Col>
                 </Row>
                 <Row>
                     <Col xs={12}>
                            <div style={{height:5,width:60,backgroundColor:'brown',borderRadius:5}}></div>
                     </Col>
                 </Row>
                 <Row>
                        <Col xs={12}>
                            <div><span style={{color:'white'}}>Login to your account</span></div>
                        </Col>
                 </Row>
                 <Row>
                     <Col style={{marginTop:30}}>
                     <Button variant='danger' onClick={()=>setValue(true)} style={{fontSize:10}}><b>Create New Account</b></Button>
                     </Col>
                 </Row>
            </div>
             </Col>
         
             <Col xs={12} md={6}>
             <div style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',borderRadius:10}}>
                <Row style={{marginTop:10}}>
                    <Col xs={6}><Button variant='primary'><FacebookIcon style={{borderRadius:'50%'}}/></Button></Col>
                    <Col xs={6}><Button variant='danger'><Image height='20' width='20' src={google}></Image></Button></Col>
                </Row>
                <Row>
                    <Col xs={4}></Col><Col xs={4}>Or</Col><Col xs={4}></Col>
                </Row>
                <Row>
                <label><b>Username or Email *</b></label>
                                         <input type="text" className="form-control" placeholder="Username or Email" onChange={(e)=>setemail(e.target.value)}></input>
                </Row>
                <Row>
                <label><b>Passowrd *</b></label>
                                         <input type="Password" className="form-control" onChange={(e)=>setpass(e.target.value)} placeholder="Password"></input>
                </Row>
                <Row>
                    <Button variant='danger' onClick={login}>Login</Button>
                </Row>
                </div>
             </Col>
         </Row>   
                             
         </div>}

                 </div>
        </DialogContent>
      </Dialog>
      </Container>
    </div>
  );
}
