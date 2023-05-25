import { Router } from 'express';
import {recordService} from '../../service/record.js'

export let router = Router();


router.get('', async (req, res) => {
    res.send(await recordService.find());
})

router.get('/:recordId', async (req, res) => {
    let record = await recordService.findOne(req.params.recordId);
    if (!record)
    return res.status(404).send({detail: 'not found'});
    res.send(record);
})

router.post('', (req, res) => {
    if (!req.body)
    return res.status(400).send({detail: 'body required'});
    if (!req.body.name || !req.body.phone)
    return res.status(400).send({detail: 'name and phone required'});
    res.status(201).send(recordService.create(req.body.name, req.body.phone));
})

router.put('/:recordId', async (req, res) => {
    if (!req.body)
    return res.status(400).send({detail: 'body required'});
    if (!req.body.name || !req.body.phone)
    return res.status(400).send({detail: 'name and phone required'});
    res.status(200).send(await recordService.update(
        req.params.recordId, req.body.name, req.body.phone
    ));
})

router.delete('/:recordId', async (req, res) => {
    await recordService.delete(req.params.recordId);
    res.status(200).send({'detail': 'deleted'});
})