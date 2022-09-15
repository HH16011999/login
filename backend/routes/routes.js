import express from "express";

import { showUserById, loginUser } from "../controllers/users.js";
import {showResultByUserId} from "../controllers/results.js"

const router = express.Router();

router.get('/user/:id', showUserById);
router.get('/result/:uid', showResultByUserId);

router.post('/login', loginUser);


export default router;