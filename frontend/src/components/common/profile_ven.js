import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Nav_ven from "../templates/Nav_ven";
import Box from '@mui/material/Box';

const Profile_Vendor = () => {
    const newUser1 = {
        email: localStorage.getItem("Email")
    }
    const [manager_name, setManagerName] = useState("");
    const [shop_name, setShop] = useState("");
    const [email, setEmail] = useState("");
    const [contact_no, setContactNo] = useState("");
    const [open_time, setOpen] = useState("");
    const [close_time, setClose] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {

        axios
            .post("/api/login/vendor_details", newUser1)
            .then((response) => {
                setManagerName(response.data.manager_name);
                setShop(response.data.shop_name);
                setEmail(response.data.email);
                setContactNo(response.data.contact_no);
                setOpen(response.data.open_time);
                setClose(response.data.close_time);
                setPassword(response.data.password);
                console.log(response.data);
            })


    }, []);


    const onChangeManager_name = (event) => {
        setManagerName(event.target.value);
    };

    const onChangeShop = (event) => {
        setShop(event.target.value);
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
            .post("/api/login/vendor", newUser)
            .then((response) => {
                alert("Edited");
                setManagerName(response.data.manager_name);
                setShop(response.data.shop_name);
                setEmail(response.data.email);
                setContactNo(response.data.contact_no);
                setOpen(response.data.open_time);
                setClose(response.data.close_time);
                setPassword(response.data.password);

                console.log(response.data);
            })
            .catch(function (error) {
                alert("Unable to edit");
                console.log(error)
            });


    };
    return (

        <Grid container align={"center"} spacing={2}>

            <Nav_ven />
            

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
                <Button variant="contained" onClick={onSubmit}>
                    Edit
                </Button>
            </Grid>
            <Box sx={{ flexGrow: 1, p: 3 }}>

                <h1>Manager Name : {manager_name}</h1>
                <h1>Shop Name : {shop_name}</h1>
                <h1>Email : {email}</h1>
                <h1>Contact No : {contact_no}</h1>
                <h1>Open Time : {open_time}</h1>
                <h1>Close Time : {close_time}</h1>

            </Box>
        </Grid>
    );

};
export default Profile_Vendor;