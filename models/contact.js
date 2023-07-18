const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    company: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: true,
    }, 
}, {
    timestamps: true
})

const contactSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    email: String,
    phone: Number,
    dob: Date,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    work: [companySchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Contact', contactSchema)