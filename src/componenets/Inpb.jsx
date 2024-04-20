/* import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'



const Inpb = () => {
    var data=[
        {name:"Aaron",age:20,place:"Mattom"},
        {name:"Sameo",age:34,place:"Koratty"}
             ] 
    
  return  <div>
     <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Age
                    </TableCell>
                    <TableCell>
                        Place
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                return<TableRow>
                    <TableCell key={i}>{val.name}</TableCell>
                    <TableCell key={i}>{val.age}</TableCell>
                    <TableCell key={i}>{val.place}</TableCell>
                </TableRow>
                })}
            </TableBody>
        </Table>
      </TableContainer>
  </div>;
    
};

export default Inpb
 */