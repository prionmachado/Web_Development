const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    message: { type: String, required: true },
    created_at: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('Chat', chatSchema);