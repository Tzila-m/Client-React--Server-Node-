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

const UpdateTodo = ({ props, setAllTodos, open, setOpen }) => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm({
        defaultValues: {
            title: props?.title || "",
            tags: props?.tags || "",
        }
    });

    useEffect(() => {
        reset({
            title: props?.title || "",
            tags: props?.tags || "",
        });
    }, [props, reset]);

    const onSubmit = async (data) => {
        console.log("Sending data to server:", data);
        try {
            console.log(props.title);

            const response = await Axios.put(`http://localhost:1100/todo/updateTodo/${props._id}`, data);
            setAllTodos(response.data)
            setOpen(false)
            reset()


        } catch (error) {
            console.error("Error sending data:", error);
        }
    };



    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle> Update-Todo</DialogTitle>
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
                            margin="normal"
                            label="Tags"
                            {...register("tags")}
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

export default UpdateTodo