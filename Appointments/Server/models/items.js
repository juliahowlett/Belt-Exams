const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    complaint: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    appdate: {
        type: Date,
        required: true
    },
    apptime: {
        type: String,
    },
}, {
    timestamps: true,
    required: true
});

module.exports = mongoose.model('Item', itemSchema);