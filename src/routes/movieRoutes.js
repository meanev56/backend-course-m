import express from "express";

const router = express.Router();

router.length("/hello", (req, res) => {
    res.json({message: "hello"})
})

export default router;