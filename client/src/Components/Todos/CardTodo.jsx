import * as React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react'
import UpdateTodo from './UpdateTodo';


const CardTodo = ({ changeComplete, handelDelete, props, setAllTodos }) => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 360 }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {props.createdAt}
            </Typography>
          </Stack>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            {props.tags}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Stack direction="row" spacing={1}>
            <ico color="primary" label="Soft" size="small" />
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Fab color="primary" aria-label="bool" onClick={() => handelDelete(props._id)}>
                <DeleteIcon />
              </Fab>
              <Fab color="secondary" aria-label="edit" onClick={() => setOpen(true)} >
                <EditIcon />
              </Fab>
              <Fab onClick={() => changeComplete(props._id)} variant="extended" sx={{
                backgroundColor: props.completed ? 'green' : 'default',
                color: props.completed ? 'white' : 'black',
                '&:hover': {
                  backgroundColor: props.completed ? 'darkgreen' : '#e0e0e0',
                }
              }}>
                <CheckIcon sx={{ mr: 1 }} />
                complited
              </Fab>
            </Box>
          </Stack>
        </Box>
      </Card>
      <UpdateTodo props={props} setAllTodos={setAllTodos} open ={open} setOpen={setOpen}/>
    </>
  );
}

export default CardTodo