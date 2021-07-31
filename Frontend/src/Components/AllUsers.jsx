import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, withStyles, Button, Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import  {getUsers, deleteUser}  from '../Services/API';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        width: '70%',
        margin: '30px auto',
    },
    thead: {
        '& > *': {
            background: 'black',
            color: 'white',
            fontSize: 17,
        }
    },
    editButton:{
        marginRight: 10
    }
})
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const AllUsers = () => {

    const classes = useStyle();
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await getUsers();
        setUsers(response.data)
        console.log(response);
    };
    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }
   

    return (
        <Table className={classes.table} component={Paper}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>No</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { 
                    users.map(user => (
                        <StyledTableRow key={user._id}>
                            <StyledTableCell>{user._id}</StyledTableCell>
                            <StyledTableCell>{user.username}</StyledTableCell>
                            <StyledTableCell>{user.name}</StyledTableCell>
                            <StyledTableCell>{user.email}</StyledTableCell>
                            <StyledTableCell>{user.phone}</StyledTableCell>
                            <StyledTableCell>
                                <Button component={Link} to={`/editUser/${user._id}`} variant="contained" size="small" color="primary" startIcon={<EditTwoToneIcon />} className={classes.editButton}>Edit</Button>
                                <Button onClick={() => deleteUserData(user._id)} variant="contained" size="small" color="secondary" startIcon={<DeleteForeverTwoToneIcon />}>Delete</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers
