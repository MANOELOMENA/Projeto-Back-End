import express from "express"
import { getBooks } from "../controllers/book"

const router = express.Router()

router.get("/", getBooks)

export default router