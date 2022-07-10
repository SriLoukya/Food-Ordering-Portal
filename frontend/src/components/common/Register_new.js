import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Register_Buyer from "./Register_Buyer";
import Register_Vendor from "./Register_Vendor";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
const Register_new = () => {
    const [userType, setUserType] = useState();

    const onChangeUserType = (event) => {
        setUserType(event.target.value);
    };

   

    return (

        <Grid container align={"center"} spacing={2}>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={userType}
                        label="User Type"
                        onChange={onChangeUserType}
                    >
                        <MenuItem value={"Vendor"}>Vendor</MenuItem>
                        <MenuItem value={"Buyer"}>Buyer</MenuItem>

                    </Select>
                </FormControl>
            </Grid>
           
            { userType == "Vendor" && <Register_Vendor />  }
            { userType == "Buyer" && <Register_Buyer /> }
           
        </Grid>

    );
};

export default Register_new;

