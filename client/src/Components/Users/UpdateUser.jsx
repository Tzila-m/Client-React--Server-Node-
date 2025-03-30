import React, { useEffect } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";

import { useForm } from "react-hook-form";
import Axios from 'axios'

const UpdateUser = ({ props, setAllUsers, open, setOpen }) => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm({
        defaultValues: {
            name: props?.name || "",
            email: props?.email || "",
            address: props?.address || "",
            phone: props?.phone || "",
        }
    });

    useEffect(() => {
        reset({
            name: props?.name || "",
            email: props?.email || "",
            address: props?.address || "",
            phone: props?.phone || "",
        });
    }, [props, reset]);

    const onSubmit = async (data) => {
        console.log("Sending data to server:", data);
        try {
            const response = await Axios.put(`http://localhost:1100/user/updateUser/${props._id}`, data)
            console.log("Props received in UpdateUser:", props);

            setAllUsers(response.data)
            setOpen(false)
            reset()


        } catch (error) {
            console.error("Error sending data:", error);
        }
    };



    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle> Update-User</DialogTitle>
                <DialogContent>
                    <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Name"
                            {...register("name")}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            {...register("email")}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Address"
                            {...register("address")}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Phone"
                            {...register("phone")}
                        />
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpen(false)}>CLOSE</Button>
                    <Button type="submit" form="my-form">
                        UPDATE
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default UpdateUser