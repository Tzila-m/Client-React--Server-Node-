import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Fab
} from "@mui/material";
import { useForm } from "react-hook-form";
import Axios from 'axios'
import AddIcon from '@mui/icons-material/Add';

const CreatPost = ({ setAllPosts }) => {

    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Sending data to server:", data);
        try {
            const response = await Axios.post("http://localhost:1100/post/createPost", data);
            setAllPosts(response.data)
            setOpen(false);
            reset();
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };



    return (
        <>
            <Fab variant="contained" onClick={() => setOpen(true)} color="primary" sx={{ position: "fixed", bottom: 32, right: 32 }}>
                <AddIcon />
            </Fab>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle> Add-Post</DialogTitle>
                <DialogContent>
                    <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Title"
                            {...register("title", { required: "שדה חובה" })}
                        />

                        <TextField
                            minRows={4}
                            multiline
                            fullWidth
                            margin="normal"
                            label="Body"
                            {...register("body")}
                        />
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpen(false)}>CLOSE</Button>
                    <Button type="submit" form="my-form" variant="contained">
                        SAVE
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CreatPost