import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Nav_buy from "../templates/Nav_buy";
import Box from '@mui/material/Box';


const Profile_Buyer = () => {
  const newUser1 = {
    email: localStorage.getItem("Email")
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setContactNo] = useState("");
  const [age, setAge] = useState("");
  const [batch, setBatch] = useState("");
  const [password, setPassword] = useState("");
  const [wallet, setWallet] = useState("");
  useEffect(() => {

    axios
      .post("http://localhost:4000/login/buyer_details", newUser1)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setContactNo(response.data.contact_no);
        setAge(response.data.age);
        setBatch(response.data.batch);
        setPassword(response.data.password);
        setWallet(response.data.wallet);
        console.log(response.data);
      })


  }, []);


  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeContactNo = (event) => {
    setContactNo(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeBatch = (event) => {
    setBatch(event.target.value);
  };
  const onChangeWallet = (event) => {
    setWallet(event.target.value);
  };


  const onSubmit = (event) => {
    event.preventDefault();
    if (age > 0) {
      const newUser = {
        name: name,
        email: email,
        contact_no: contact_no,
        age: age,
        batch: batch,
        password: password,
        wallet: wallet


      };

      axios
        .post("http://localhost:4000/login/buyer", newUser)
        .then((response) => {
          alert("Edited");
          setName(response.data.name);
          setEmail(response.data.email);
          setContactNo(response.data.contact_no);
          setAge(response.data.age);
          setBatch(response.data.batch);
          setPassword(response.data.password);
          setWallet(response.data.wallet);
          console.log(response.data);
        })
        .catch(function (error) {
          alert("Unable to edit");
          console.log(error)
        });
    }
    else {
      alert("Enter valid age");
    }


  };



  return (

    <Grid container align={"center"} spacing={2}>
      <Nav_buy />
      <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeName}
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
          label="Age"
          variant="outlined"
          value={age}
          onChange={onChangeAge}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Batch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={batch}
            label="Batch"
            onChange={onChangeBatch}
          >
            <MenuItem value={"UG1"}>UG1</MenuItem>
            <MenuItem value={"UG2"}>UG2</MenuItem>
            <MenuItem value={"UG3"}>UG3</MenuItem>
            <MenuItem value={"UG4"}>UG4</MenuItem>
            <MenuItem value={"UG5"}>UG5</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Wallet"
          variant="outlined"
          value={wallet}
          onChange={onChangeWallet}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Edit
        </Button>
      </Grid>
      <Box sx={{ flexGrow: 1, p: 3 }}>

                <h1>Name : {name}</h1>
                <h1>Email : {email}</h1>
                <h1>Contact No : {contact_no}</h1>
                <h1>Age : {age}</h1>
                <h1>Batch : {batch}</h1>
                <h1>Wallet : {wallet}</h1>

            </Box>
    </Grid>
  );

};
export default Profile_Buyer;