const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String },
    email: { type: String },
    hashedPassword: { type: String, required: true },
    photoUrl: { type: String},
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song', default: [] }],
    favSongs: [{ type: Schema.Types.ObjectId, ref: 'Song', default: [] }]
});

const User = model('User', userSchema);

module.exports = User;