import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { updateUser, getUsers } from '../Services/API';

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

const EditUsers = () => {
    const [user, setUser] = useState(initialValues);
    const {name, username, email, phone} = user;
    
    const {id} = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(() => {
        loadUserData();   
    },[])
    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data); 
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const updateUserDetails = async () => {
        await updateUser(id, user);
        history.push("/allUsers")
    }

    return (
        <FormGroup className={classes.formGroup}>
            <Typography variant="h5" gutterBottom className={classes.typography}>Update User Details</Typography>
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
            <Button onClick={() => updateUserDetails()} className={classes.button} variant="contained" color="primary">Update</Button>
        </FormGroup>
    )
}

export default EditUsers
