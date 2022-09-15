import express from "express";

import {
  showUserById, showUserByEmail,
  loginUser, 
} from "../controllers/user.js";

const router = express.Router();

router.get('/user/:id', showUserById);

//router.get('/userbyemail', showUserByEmail);
router.post('/login', loginUser);


export default router;