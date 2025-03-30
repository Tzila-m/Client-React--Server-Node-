
import * as React from 'react';
import Axios from 'axios'
import { useEffect, useState } from 'react'
import CardTodo from './CardPost'
import CreatTodo from './CreatPost'
import Grid from "@mui/material/Grid";

const GetAllPosts = () => {

    const [allPosts, setAllPosts] = useState([])

    const handelDelete = async (id) => {
        //console.log("connectTodos")
        const res = await Axios.delete(`http://localhost:1100/post/deletePost/${id}`);
        setAllPosts(res.data)
    }

    const connectPosts= async () => {
        const res = await Axios.get("http://localhost:1100/post/getAllPosts")
        setAllPosts(res.data)
    }

    useEffect(() => {
        connectPosts()
    }, [])

    if (allPosts.length === 0)
        return <CreatTodo setAllPosts={setAllPosts} />

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={0} sx={{ padding: 2 }}>
                {allPosts.map((todo) => (
                    <Grid item xs={12} sm={6} key={todo._id}>
                        <CardTodo handelDelete={handelDelete} props={todo} setAllPosts={setAllPosts}/>
                    </Grid>
                ))}
            </Grid>
            <CreatTodo setAllPosts={setAllPosts} />

        </>

    );
}

export default GetAllPosts;