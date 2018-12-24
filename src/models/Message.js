const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    from: String,
    subject: String,
    email: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', MessageSchema);