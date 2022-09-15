import express from "express";

import { showUserById, showUserByEmail, loginUser, createUser } from "../controllers/users.js";
import {showResultByUserId} from "../controllers/results.js"

const router = express.Router();

router.get('/user/:id', showUserById);
router.get('/result/:uid', showResultByUserId);
router.get('/userbyemail', showUserByEmail);

router.post('/login', loginUser);
router.post('/user', createUser);


export default router;