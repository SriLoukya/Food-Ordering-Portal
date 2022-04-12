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
const Buyerfoodlist = (props) => {
    const [foods, setItems] = useState([]);
    const [food_name, setFood_name] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [food_type, setFood_type] = useState("");
    const [add_ons, setAdd_ons] = useState("");
    const [vendor_email, setVendor_email] = useState("");
    const [quantity1, setQuantity] = useState();
    const [shop_name, setShop_name] = useState("");
    const [vendor_name, setVendor_name] = useState("");
    const [flag, setFlag] = useState("0");
    useEffect(() => {
        axios
            .get("http://localhost:4000/food/all")
            .then((response) => {
                setItems(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
        console.log(foods);    
    }, []);
    const onChangeQuantity = (event) => {
        setQuantity(event.target.value);
        console.log(quantity1);
    };

    const onSubmitorder = (event) => {
        event.preventDefault();
        setFlag("1");
        console.log(flag);

    };
    function onsubmit(food_name, price, rating, food_type, add_ons, vendor_email, quantity, shop_name, vendor_name) {
       console.log(food_name, price, rating, food_type, add_ons, vendor_email,  shop_name, vendor_name);
       
        //console.log(shop_name);
        var today = new Date();
        const newUser3 = {
            food_name: food_name,
            price: price,
            rating: rating,
            food_type: food_type,
            add_ons: add_ons,
            vendor_email: vendor_email,
            quantity: quantity1,
            shop_name: shop_name,
            vendor_name: vendor_name,
            buyer_email: localStorage.getItem("Email"),
            status: "Placed",
            time: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),

        };
        console.log(newUser3);

        axios
            .post("http://localhost:4000/food/buyerorder", newUser3)
            .then((response) => {
                alert("Order Placed");
                console.log(response.data);
                setFlag("0");
                setQuantity();
            }
            )
            .catch(function (error) {
                alert("Couldn't place order");
                console.log(error);
            }
            );


    };
    function onSubmitFav(food_name, price, rating, food_type, add_ons, vendor_email, quantity, shop_name, vendor_name) {
        const newUser4 = {
            food_name: food_name,
            price: price,
            rating: rating,
            food_type: food_type,
            add_ons: add_ons,
            vendor_email: vendor_email,
            quantity: quantity,
            shop_name: shop_name,
            vendor_name: vendor_name,
            buyer_email: localStorage.getItem("Email"),

        };
        axios
            .post("http://localhost:4000/food/buyerfav", newUser4)
            .then((response) => {
                alert("Added to Favourites");
                console.log(response.data);
            }
            )
            .catch(function (error) {
                alert("Couldn't add to Favourites");
                console.log(error);
            }
            );
    };








    return (
        <div>
            <Nav_buy />
            {flag === "1" && <Grid item xs={12}>
                <TextField
                    label="Quantity"
                    variant="outlined"
                    value={quantity1}
                    onChange={onChangeQuantity}
                />
            </Grid>}
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
                                    <TableCell>Vendor Name</TableCell>
                                    <TableCell>Shop Name</TableCell>
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
                                        <TableCell>{food.vendor_name}</TableCell>
                                        <TableCell>{food.shop_name}</TableCell>
                                        <script>console.log(food.shop_name)</script>
                                        {/* <TableCell>
                                            <Button onClick={() => navigate("/food_edit/" + food._id)}>Edit</Button>
                                        </TableCell> */}
                                        <TableCell>
                                            <Button onClick={onSubmitorder}>Order</Button>
                                        </TableCell>
                                        {flag === "1" && <TableCell>
                                            <Button onClick={() => onsubmit(food.food_name, food.price, food.rating, food.food_type, food.add_ons, food.vendor_email, food.quantity, food.shop_name, food.vendor_name)}>Place Order</Button>
                                        </TableCell>}
                                        <TableCell>
                                            <Button onClick={() => onSubmitFav(food.food_name, food.price, food.rating, food.food_type, food.add_ons, food.vendor_email, food.quantity, food.shop_name, food.vendor_name)}>Add To Fav</Button>
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


export default Buyerfoodlist;
