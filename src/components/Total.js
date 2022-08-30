import React from "react";
import accounting from "accounting";
import { IconButton, makeStyles } from "@material-ui/core";
import {Button} from '@material-ui/core';
import {getBasketTotal } from "../reducer";
import { useStateValue } from '../StateProvider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const useStyles = makeStyles((theme)=>({
root: {
    display:"flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
    height: "20vh",
},
button:{
    marginTop:"2rem",
},
button1:{
    marginTop: "2rem",
    marginLeft: "50px"
}
}))

const Total = ()=>{
    const classes = useStyles()
    const [{ basket, basketAmount}, dispatch] = useStateValue();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (        
<div className={classes.root}>
    <h5>total items:  {basketAmount}</h5>
    <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
    
    
    <Button className={classes.button} variant= "contained" color = "secondary" onClick={handleOpen}>Checkout</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirmar Compra
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Desea confimar la compra?
          </Typography>
          <Button className={classes.button1} variant= "contained" color = "secondary"> Confirmar</Button>
          <Button className={classes.button1} variant= "contained" color = "secondary">Cancelar</Button>
        </Box>
      </Modal>
</div>

    )
}
export default Total;