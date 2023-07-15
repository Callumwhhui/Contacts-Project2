const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    email: String,
    phone: Number,
    dob: Date,
}, {
    timestamps: true
})

module.exports = mongoose.model('Contact', contactSchema);