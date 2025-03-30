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

const UpdatePost = ({ props, setAllPosts, open, setOpen }) => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm({
        defaultValues: {
            title: props?.title || "",
            body: props?.body || "",
        }
    });

    useEffect(() => {
        reset({
            title: props?.title || "",
            body: props?.body || "",
        });
    }, [props, reset]);

    const onSubmit = async (data) => {
        console.log("Sending data to server:", data);
        try {
            const response = await Axios.put(`http://localhost:1100/post/updatePost/${props._id}`, data);
            setAllPosts(response.data)
            setOpen(false)
            reset()


        } catch (error) {
            console.error("Error sending data:", error);
        }
    };



    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle> Update-Post</DialogTitle>
                <DialogContent>
                    <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Title"
                            {...register("title")}
                        />

                        <TextField
                            fullWidth
                            minRows={4}
                            multiline
                            style={{ width: '100%' }}
                            margin="normal"
                            label="Body"
                            {...register("body")}
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

export default UpdatePost