import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addUser } from '../Services/API';

const useStyle = makeStyles({
    formGroup: {
        width: "60%",
        margin: '30px auto',
        '& > *': {
            margin: 5
        }
    },  
    button: {
        margin: '10px auto'
    },
    typography:{
        fontWeight: "bold",
        margin: 'auto'
    }
})

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const AddUsers = () => {
    const [user, setUser] = useState(initialValues);
    const {name, username, email, phone} = user;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push("/allUsers")
    }

    return (
        <FormGroup className={classes.formGroup}>
            <Typography variant="h5" gutterBottom className={classes.typography}>Add New User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)}  name="name" value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"  value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
            </FormControl>
            <Button onClick={() => addUserDetails()} className={classes.button} variant="contained" color="secondary">Add User</Button>
        </FormGroup>
    )
}

export default AddUsers
