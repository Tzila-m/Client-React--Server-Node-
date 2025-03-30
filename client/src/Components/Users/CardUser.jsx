import * as React from "react";
import {
  Card,
  Stack,
  Divider,
  Typography,
  Box,
  Fab,
  Grid,
  Avatar,
} from "@mui/material";
import { Delete, Edit, Email, LocationOn, Phone, Person } from "@mui/icons-material";
import { useState } from "react";
import UpdateUser from "./UpdateUser";

const CardUser = ({ handelDelete, props, setAllUsers }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          maxWidth: 380,
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <Person />
              </Avatar>
              <Typography variant="h5">{props.name}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                {props.createdAt}
              </Typography>
            </Stack>
          </Stack>

          <Divider />

          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Email color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                {props.email}
              </Typography>
            </Grid>

            <Grid item xs={12} />

            <Grid item>
              <LocationOn color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                {props.address}
              </Typography>
            </Grid>

            <Grid item xs={12} />

            <Grid item>
              <Phone color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                {props.phone}
              </Typography>
            </Grid>
          </Grid>

          <Divider />
          <Stack direction="row" spacing={2} justifyContent="center">
            <Fab size="small" color="primary" onClick={() => handelDelete(props._id)}>
              <Delete />
            </Fab>
            <Fab size="small" color="secondary" onClick={() => setOpen(true)}>
              <Edit />
            </Fab>
          </Stack>
        </Stack>
      </Card>

      <UpdateUser props={props} setAllUsers={setAllUsers} open={open} setOpen={setOpen} />
    </>
  );
};

export default CardUser;
