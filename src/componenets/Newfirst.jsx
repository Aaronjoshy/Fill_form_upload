import { AppBar, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material'
import React,{ useState } from 'react'

const Newfirst=() =>{
    var[inputs,setInput]=useState([])
    var[data,setData]=useState([])
    const inputHandler = (e)=>
    {
        setInput({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)

    };
    const addHandile=()=>
    {
        console.log("Clicked")
        setData((data)=>[...data,inputs]) 
        console.log(data);
    };

  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div"  style={{textAlign:'left'}} sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Log-In</Button>
          <Button color="inherit">State</Button> 
          <Button color="inherit">Array</Button> 
        </Toolbar>
      </AppBar>
    </Box>
    
    <div style={{margin:"5%"}}>
    <br/><br/>
    <Typography variant='h4'>Fill the form</Typography><br/><br/>
    &ensp;
    <TextField label="Name" name='name' variant='filled' onChange={inputHandler}></TextField><br/><br/>
    &ensp; 
    <TextField label="Age" name='age' variant='filled' onChange={inputHandler}></TextField>
    &ensp; 
    <TextField label="Place" name='place' variant='filled' onChange={inputHandler}></TextField><br/><br/>
    &ensp; 
    <TextField label="Phno" name='phno' variant='filled' onChange={inputHandler}></TextField><br/><br/>

    <Button variant='contained' onClick={addHandile}>Submit</Button>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:"green",fontStyle:"oblique"}}  >
                        Name
                    </TableCell>
                    <TableCell style={{color:"green",fontStyle:"oblique"}} >
                        Age
                    </TableCell>
                    <TableCell style={{color:"green",fontStyle:"oblique"} } >
                        Place
                    </TableCell>
                    <TableCell style={{color:"green",fontStyle:"oblique"} } >
                        Ph.no
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((v,i)=>{
                return<TableRow key={i}>
                    <TableCell >{v.name}</TableCell>
                    <TableCell >{v.age}</TableCell>
                    <TableCell >{v.place}</TableCell>
                    <TableCell >{v.phno}</TableCell>
                </TableRow>
                })
                }
            </TableBody>  
        </Table>
      </TableContainer>

    </div>
    </div>
  )
}

export default Newfirst
