import express from 'express';
import { addUser, getUsers, getUserToEditById, editUser, deleteUser} from '../controllers/useController.js';


const route = express.Router(); 

route.get('/', getUsers);
route.post('/add', addUser);
route.get('/:id', getUserToEditById);
route.put('/:id', editUser);
route.delete('/:id', deleteUser)

export default route; 