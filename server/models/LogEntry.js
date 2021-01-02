const mongoose = require('mongoose');
const { Schema } = mongoose;

const logEntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    comments: String,
    image: String,
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
    latitude: {
        type:Number,
        required: true,
        min: -90,
        max: 90
    },
    visitDate: {
        type: Date,
        required: true
    }

}, {timestamps: true})


const LogEntry = mongoose.model('logEntry', logEntrySchema)

module.exports = LogEntry;

