import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import Nav_ven from "../templates/Nav_ven";

const UsersList = (props) => {
    const newUser1 = {
        vendor_email: localStorage.getItem("Email")
    }
    const [foods, setItems] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        axios
            .post("/api/food", newUser1)
            .then((response) => {
                setItems(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, [count]);

    const navigate = useNavigate();

    const onsubmit = (event) => {
        const newUser2 = {
            id: event
        };
        axios
            .post("/api/food/delete", newUser2)
            .then((response) => {
                alert("Deleted");
                console.log(response.data);
                   setCount(count+1);
            })
            .catch(function(error){
              alert("Couldn't delete");
            });


    };


    return (
        <div>
            <Nav_ven />
            <Grid container>

                <Grid item xs={12} md={9} lg={9}>
                    <Button onClick={() => navigate("/food_add")}>Add Item</Button>

                    <Paper>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell> Sr No.</TableCell>
                                    <TableCell> Item Name</TableCell>
                                    <TableCell> Price</TableCell>
                                    <TableCell>Food Type</TableCell>
                                    <TableCell>Add on</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Rating</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {foods.map((food, ind) => (
                                    <TableRow key={ind}>
                                        <TableCell>{ind}</TableCell>
                                        <TableCell>{food.food_name}</TableCell>
                                        <TableCell>{food.price}</TableCell>
                                        <TableCell>{food.food_type}</TableCell>
                                        <TableCell>{food.add_ons}</TableCell>
                                        <TableCell>{food.quantity}</TableCell>
                                        <TableCell>{food.rating}</TableCell>
                                        { <TableCell>
                                            <Button onClick={()=>onsubmit(food._id)}>Delete</Button>
                                        </TableCell> }
                                        <TableCell>
                                            <Button >Edit</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default UsersList;
