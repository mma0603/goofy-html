import { Router } from "express";
import { Settings } from "../config/index.js";

export let router = Router();

router.get('/:page', (req, res) => {
    res.sendFile(Settings.templatesPath + req.params.page +'.html');
})
