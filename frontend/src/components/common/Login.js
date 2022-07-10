import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Buyer from "./buyer"
import Vendor from "./vendor"
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const user = {
            email: email,
            password: password
        };
        axios
            .post("/api/login", user)
            .then((response) => {
                if (response.data.message === "buyer") {
                    localStorage.setItem("ID", response.data.user._id);
                    localStorage.setItem("Name",response.data.user.name)
                    localStorage.setItem("Email", response.data.user.email)
                    localStorage.setItem("Contact_no", response.data.user.contact_no)
                    localStorage.setItem("Age", response.data.user.age)
                    localStorage.setItem("Batch", response.data.user.batch)
                    localStorage.setItem("Password", response.data.user.password)   
                    window.location = "/buyer";
                }
                else if (response.data.message === "vendor") {
                    localStorage.setItem("ID", response.data.user._id);
                    localStorage.setItem("Manager_name",response.data.user.manager_name)
                    localStorage.setItem("Shop_name", response.data.user.shop_name)
                    localStorage.setItem("Email", response.data.user.email)
                    localStorage.setItem("Contact_no", response.data.user.contact_no)
                    localStorage.setItem("Open_time", response.data.user.open_time)
                    localStorage.setItem("Close_time", response.data.user.close_time)
                    localStorage.setItem("Password", response.data.user.password)
                    window.location = "/vendor";
                }
                else if (response.data.message === "Wrong password") {
                    alert("Wrong password");
                }
                else if (response.data.message === "User not registered") {
                    alert("User not registered");
                }
            })
    };
    return (
        <Grid container align={"center"} spacing={2}>

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
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={onChangePassword}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={onSubmit}>
                    Login
                </Button>
            </Grid>
        </Grid>
    );
};
export default Login;