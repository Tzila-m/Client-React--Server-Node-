
import * as React from 'react';
import Axios from 'axios'
import { useEffect, useState } from 'react'
import CardTodo from './CardTodo'
import CreatTodo from './CreatTodo'
import Grid from "@mui/material/Grid";
// import TextField from '@mui/material/TextField';


const GetAllTodos = () => {

  const [allTodos, setAllTodos] = useState([])

  const handelDelete = async (id) => {
    //console.log("connectTodos")
    const res = await Axios.delete(`http://localhost:1100/todo/deleteTodo/${id}`);
    setAllTodos(res.data)
  }

  const changeComplete = async (id) => {
    const res = await Axios.put(`http://localhost:1100/todo/changeComplete/${id}`)
    setAllTodos(res.data)
  }


  const connectTodos = async () => {
    const res = await Axios.get("http://localhost:1100/todo/getAllTodos")
    setAllTodos(res.data)
  }

  useEffect(() => {
    connectTodos()
  }, [])

  // const SearchChange = (event) => {
  //   const title = event.target.value;

  //   if (title === '')
  //     setAllTodos(allTodos)

  //   const searchList = allTodos.filter(todo =>
  //     todo.title.toLowerCase().includes(title.toLowerCase())
  //   )

  //   if (searchList.length === 0) {
  //     setAllTodos([])

  //   } else {
  //     setAllTodos(searchList)
  //   }
  // }

  if (allTodos.length === 0)
    return <CreatTodo setAllTodos={setAllTodos} />

  return (
    <>
      {/* <TextField
      label="חפש לפי כותרת"
      variant="outlined"
      fullWidth
      onChange={SearchChange}
      sx={{ marginBottom: 2 }}
    /> */}
      <Grid container rowSpacing={1} columnSpacing={0} sx={{ padding: 2 }}>
        {allTodos.map((todo) => (
          <Grid item xs={12} sm={6} key={todo._id}>
            <CardTodo changeComplete={changeComplete} handelDelete={handelDelete} props={todo} setAllTodos={setAllTodos} />
          </Grid>
        ))}
      </Grid>
      <CreatTodo setAllTodos={setAllTodos} />

    </>

  );
}

export default GetAllTodos;
