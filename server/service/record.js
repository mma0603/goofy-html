import mongoose from "mongoose";
import { Record } from "../entitiy/record.js";


export async function findRecords() {
    return await Record.find({}).sort({createdAt: -1});
}

export function createRecord(name, phone) {
    let record = new Record({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        phone: phone
    });
    record.save();
    return record;
}