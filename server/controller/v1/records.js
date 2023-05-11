import { Router } from 'express';
import {createRecord, findRecords} from '../../service/record.js'

export let router = Router();

router.post('', (req, res) => {
    if (!req.body)
    return res.status(400).send({detail: 'body required'});
    if (!req.body.name || !req.body.phone)
    return res.status(400).send({detail: 'name and phone required'});
    res.status(201).send(createRecord(req.body.name, req.body.phone));
})

router.get('', async (req, res) => {
    res.send(await findRecords());
})