import { Router } from 'express';
import {router as v1Router} from './v1/router.js';

export let router = Router();
router.use('/v1', v1Router);
