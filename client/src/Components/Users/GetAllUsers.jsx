import * as React from 'react';
import Axios from 'axios'
import { useEffect, useState } from 'react'
import CardUser from './CardUser'
import CreatUser from './CreatUser'
import Grid from "@mui/material/Grid";

const GetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([])

    const handelDelete = async (id) => {
        const res = await Axios.delete(`http://localhost:1100/user/deleteUser/${id}`);
        setAllUsers(res.data)
    }

    const connectUsers = async () => {
        const res = await Axios.get("http://localhost:1100/user/getAllUsers")
        setAllUsers(res.data)
    }

    useEffect(() => {
        connectUsers()
    }, [])

    if (allUsers.length === 0)
        return <CreatUser setAllUsers={setAllUsers} />

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={0} sx={{ padding: 2 }}>
                {allUsers.map((todo) => (
                    <Grid item xs={12} sm={6} key={todo._id}>
                        <CardUser handelDelete={handelDelete} props={todo} setAllUsers={setAllUsers} />
                    </Grid>
                ))}
            </Grid>
            <CreatUser setAllUsers={setAllUsers} />

        </>

    );
}

export default GetAllUsers;