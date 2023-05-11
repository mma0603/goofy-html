import { Router } from "express";
import { Settings } from "../../config/index.js";

export let router = Router();

router.get('', (req, res) => {
    res.send(Settings.prices);
})
