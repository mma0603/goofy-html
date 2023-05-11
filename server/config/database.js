import mongoose from 'mongoose';

import { Settings } from './index.js';

export function dbConnection(){
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(Settings.mongoDsn) 
        console.log('DB connection successful')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
}