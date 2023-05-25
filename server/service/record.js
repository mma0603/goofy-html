import mongoose from "mongoose";
import { Record } from "../entity/record.js";


export class recordService{
    static async find() {
        return await Record.find({}).sort({createdAt: -1});
    }

    static async findOne(id) {
        return await Record.findById(id)
    }
    
    static create(name, phone) {
        let record = new Record({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            phone: phone
        });
        record.save();
        return record;
    }

    static async update(id, name, phone) {
        let record = await Record.findById(id);
        record.name = name;
        record.phone = phone;
        record.save();
        return record;
    }

    static async delete(id) {
        await Record.deleteOne({_id: id});
    }
}