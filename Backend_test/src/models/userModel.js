import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    email_id: { type: 'string', required: true },
    password: {
        type: 'string', required: true
    }
})

export default model('user', userSchema);