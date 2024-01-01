const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
username: { type: String, required: true},
age: { type: Number, required:true},
hobbies: {
    type: [String],
    validate: v => Array.isArray(v) && v.length > 0,
}
});

module.exports = mongoose.model("User", userSchema);

