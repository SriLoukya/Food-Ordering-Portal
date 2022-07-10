import Nav_buy from "../templates/Nav_buy";
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
import { TextField } from "@mui/material";
const Buyer_orders = (props) => {
    const [foods, setItems] = useState([]);
    const [food_name, setFood_name] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [food_type, setFood_type] = useState("");
    const [add_ons, setAdd_ons] = useState("");
    const [vendor_email, setVendor_email] = useState("");
    const [quantity, setQuantity] = useState();
    const [shop_name, setShop_name] = useState("");
    const [vendor_name, setVendor_name] = useState("");
    const [flag, setFlag] = useState("0");
    const newUser1 = {
        buyer_email: localStorage.getItem("Email")
    }
    useEffect(() => {
        axios
            .post("/api/food/buyer_orders", newUser1)
            .then((response) => {
                setItems(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    


    return (
        <div>
            <Nav_buy />

            <Grid container>

                <Grid item xs={12} md={9} lg={9}>

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
                                    <TableCell>Order Time</TableCell>
                                    <TableCell>Shop Name</TableCell>
                                    <TableCell>Status</TableCell>
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
                                        <TableCell>{food.rating }</TableCell>
                                        <TableCell>{food.time}</TableCell>
                                        <TableCell>{food.shop_name}</TableCell>
                                        <TableCell>{food.status}</TableCell>
                                        {/* <TableCell>
                                            <Button onClick={() => navigate("/food_edit/" + food._id)}>Edit</Button>
                                        </TableCell> */}
                                        <TableCell>{food.status ==="Completed"&& <Button variant="contained" color="primary">Rating</Button>}</TableCell>

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


export default Buyer_orders;
