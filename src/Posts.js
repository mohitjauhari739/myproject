

import React from 'react';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#533cf8',
      color: theme.palette.common.white,
      fontSize: 15,
    },
    body: {
      fontSize: 18,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);


const useStyles = makeStyles({
  main: {
    maxWidth: '90%',
    marginRight: 'auto',
    marginBottom: '75px',
    marginLeft: '25px',
    borderRadius: '8px',
  },
});


  


export default function Posts() {
  
  const[user,setUser]=useState([])

  useEffect(()=>{
  let url= "https://dummyjson.com/posts"
   fetch(url).then((response)=>{
     return response.json()
  }).then((data)=>{
  setUser(data.posts)
  }).catch((error)=>{
  console.log(error)
  })
  },[]) 
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      className={classes.main}
      elevation={0}
      style={{
        borderRight: '0.3px solid lightgray',
        borderLeft: '0.3px solid lightgray',
      }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">TITLE</StyledTableCell>
            <StyledTableCell align="right">BODY</StyledTableCell>
            <StyledTableCell align="right">USERID</StyledTableCell>
            <StyledTableCell align="right">TAGS</StyledTableCell>
            <StyledTableCell align="right">REACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((data,index) => (
            <StyledTableRow keys={index}>
              <StyledTableCell component="th" scope="row">
                {data.id}
              </StyledTableCell>
              <StyledTableCell align="right">{data.title}</StyledTableCell>
              <StyledTableCell align="right">{data.body}</StyledTableCell>
              <StyledTableCell align="right">{data.userId}</StyledTableCell>
              <StyledTableCell align="right"><Button  variant='outlined'>{data.tags[0]}</Button><Button  variant='outlined'>{data.tags[1]}</Button>
              <Button  variant='outlined'>{data.tags[2]}</Button></StyledTableCell>
              <StyledTableCell align="right">{data.reactions}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>

  )
  }