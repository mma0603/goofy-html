import { Router } from 'express';
import {router as prices_router} from './prices.js';
import {router as records_router} from './records.js';

export let router = Router();
router.use('/prices', prices_router);
router.use('/records', records_router);
