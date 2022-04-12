import Nav_buy from "../templates/Nav_buy";
import Nav_ven from "../templates/Nav_ven";
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

const Vendor_orders = (props) => {
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
        vendor_email: localStorage.getItem("Email")
    }
    useEffect(() => {
        axios
            .post("http://localhost:4000/food/vendor_orders", newUser1)
            .then((response) => {
                setItems(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const onsubmit = (event) => {
        console.log("hello");
        const newUser2 = {

            status: event.status,
            id: event._id

        };
        if (newUser2.status === "Placed") {
            newUser2.status = "Accepted";
        }
        else if (newUser2.status === "Accepted") {
            newUser2.status = "Cooking";
        }
        else if (newUser2.status === "Cooking") {
            newUser2.status = "Ready for Pickup";
        }
        else if (newUser2.status === "Ready for Pickup") {
            newUser2.status = "Completed";
        }
        axios
            .post("http://localhost:4000/food/change_status_vendor", newUser2)
            .then((response) => {
                alert("Order Status Changed\t" + response.data.status);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

            window.location.reload();     
    }
    const onreject = (event) => {
        console.log("hello");
        const newUser3 = {
            status: event.status,
            id: event._id

        };
        newUser3.status = "Rejected";
        axios
            .post("http://localhost:4000/food/change_status_vendor", newUser3)
            .then((response) => {
                alert("Order Status Changed\t" + response.data.status);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload();    
    }


    return (
        <div>
            <Nav_ven />

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
                                        <TableCell>{food.status==="Completed"?food.rating :"N/A"}</TableCell>
                                        <TableCell>{food.time}</TableCell>
                                        <TableCell>{food.status}</TableCell>
                                        {/* <TableCell>
                                            <Button onClick={() => navigate("/food_edit/" + food._id)}>Edit</Button>
                                        </TableCell> */}
                                        <TableCell>{(food.status!=="Rejected" && food.status!=="Completed")&& <Button variant="contained" color="primary" onClick={() => { onsubmit(food) }}>Move To Next Stage</Button>}</TableCell>
                                        <TableCell>{food.status === "Placed" && <Button variant="contained" color="primary" onClick={() => { onreject(food) }}>Reject</Button>}</TableCell>

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


export default Vendor_orders;
