import mongoose from 'mongoose';


export let recordSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    phone: String,
    createdAt: { 
    	type: Date,
    	default: Date.now
    }
});

export let Record = mongoose.model('Record', recordSchema);