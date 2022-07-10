import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register_Vendor = () => {
    const [manager_name, setManagerName] = useState("");
    const [shop_name, setShop] = useState("");
    const [email, setEmail] = useState("");
    const [contact_no, setContactNo] = useState("");
    const [open_time, setOpen] = useState("");
    const [close_time, setClose] = useState("");
    const [password, setPassword] = useState("");

    const onChangeManager_name = (event) => {
        setManagerName(event.target.value);
    };

    const onChangeShop = (event) => {
        setShop(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangeContactNo = (event) => {
        setContactNo(event.target.value);
    };

    const onChangeOpen = (event) => {
        setOpen(event.target.value);
    };

    const onChangeClose = (event) => {
        setClose(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const resetInputs = () => {
        setManagerName("");
        setShop("");
        setEmail("");
        setContactNo("");
        setOpen("");
        setClose("");
        setPassword("");

    };
    const onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            manager_name: manager_name,
            shop_name: shop_name,
            email: email,
            contact_no: contact_no,
            open_time: open_time,
            close_time: close_time,
            password: password,
        };

        axios
            .post("/api/register/vendor", newUser)
            .then((response) => {
                alert("Created");
                console.log(response.data);
            })
            .catch(function (error) {
                alert("Invalid credentials");
                console.log(error)
            });

        resetInputs();
    };
    return (
        <Grid container align={"center"} spacing={2}>
            <Grid item xs={12}>
                <TextField
                    label="Manager Name"
                    variant="outlined"
                    value={manager_name}
                    onChange={onChangeManager_name}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Shop Name"
                    variant="outlined"
                    value={shop_name}
                    onChange={onChangeShop}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={onChangeEmail}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Contact No"
                    variant="outlined"
                    value={contact_no}
                    onChange={onChangeContactNo}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Open Time"
                    variant="outlined"
                    value={open_time}
                    onChange={onChangeOpen}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Close Time"
                    variant="outlined"
                    value={close_time}
                    onChange={onChangeClose}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={onChangePassword}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={onSubmit}>
                    Register
                </Button>
            </Grid>
        </Grid>
    );

};
export default Register_Vendor;