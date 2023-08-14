import express from 'express';
import {login} from "./src/contollers";

const router = express.Router();

router.post("/login", login);


export default router;












