import express from 'express';
import {Settings} from '../config/index.js';
import { dbConnection } from '../config/database.js';
import { router as apiRouter } from '../controller/router.js';
import { router as templatesRouter } from '../controller/templates.js';

export function createApp(){
    const app = express();
    app.use(express.urlencoded())

    app.use('/api', apiRouter);
    app.use('/pages', templatesRouter);
    app.use('/static', express.static(Settings.staticPath));
    
    dbConnection();
    console.log('Application startup successful');
    return app;
}
