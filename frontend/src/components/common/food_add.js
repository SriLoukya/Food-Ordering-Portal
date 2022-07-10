import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Nav_ven from "../templates/Nav_ven";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const Food_add = () => {
    console.log("email",localStorage.getItem("Email"));
    const [food_name, setFoodName] = useState("");
    const [price, setPrice] = useState("");
    const [vendor_email, setVEmail] = useState("");
    const [food_type, setFoodType] = useState("");
    const [add_ons, setAddon] = useState("");
    const [quantity, setQuantity] = useState();
    //const [rating, setRating] = useState("");
 
    const onChangeFood_Name = (event) => {
        setFoodName(event.target.value);
    };

    const onChangePrice = (event) => {
        setPrice(event.target.value);
    };
    const onChangeFoodType = (event) => {
        setFoodType(event.target.value);
    };

    const onChangeAddOns = (event) => {
        setAddon(event.target.value);
    };
    
    const onChangeQuantity = (event) => {
        setQuantity(event.target.value);
    };
    
    const resetInputs = () => {
        setFoodName("");
        setPrice("");
        setFoodType("");
        setAddon("");
        setQuantity("");
     
    };
    const onSubmit = (event) => {
        event.preventDefault();
        
        const newFood = {
            food_name: food_name,
            price: price,
            vendor_email: localStorage.getItem("Email"),
            food_type: food_type,
            add_ons: add_ons,
            quantity: quantity,
            
            vendor_name: localStorage.getItem("Manager_name"),
            shop_name: localStorage.getItem("Shop_name"),
        };

        axios
            .post("/api/food/add", newFood)
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
            <Nav_ven />
            <Grid item xs={12}>
                <TextField
                    label="Food Name"
                    variant="outlined"
                    value={food_name}
                    onChange={onChangeFood_Name}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Price"
                    variant="outlined"
                    value={price}
                    onChange={onChangePrice}
                />
            </Grid>
            <Grid item xs={12}>
                {/* <TextField
                    label="Food Type"
                    variant="outlined"
                    value={food_type}
                    onChange={onChangeFoodType}
                /> */}
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Food Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={food_type}
                        label="Food Type"
                        onChange={onChangeFoodType}
                    >
                        <MenuItem value={"Veg"}>Veg</MenuItem>
                        <MenuItem value={"Non Veg"}>Non Veg</MenuItem>
                        
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Add Ons"
                    variant="outlined"
                    value={add_ons}
                    onChange={onChangeAddOns}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Quantity"
                    variant="outlined"
                    value={quantity}
                    onChange={onChangeQuantity}
                />
            </Grid>
            

            <Grid item xs={12}>
                <Button variant="contained" onClick={onSubmit}>
                    Add
                </Button>
            </Grid>
        </Grid>
    );

};
export default Food_add;