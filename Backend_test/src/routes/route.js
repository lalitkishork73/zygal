import { Router } from "express";
import { login } from "../controllers/loginControl.js";
import { Cookie_clearCookie, Cookie_setData, Cookie_searchData } from "../controllers/cookieControl.js";
const router = Router()

router.post('/login', login)

router.post('/set-cookie', Cookie_setData);

router.post('/search-cookie', Cookie_searchData);

router.post('/clear-cookie', Cookie_clearCookie);

export default router;