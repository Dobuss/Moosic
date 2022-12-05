const Song = require('../models/Song');
const User = require('../models/User');

async function getAllSongs() {
    return Song.find({}).lean();
};

async function createSong (song){
        return Song.create(song);
};

async function getSongById(id){
    return Song.findById(id).lean();
};

async function deleteSong(id){
    return Song.findByIdAndDelete(id);
};

async function editSong(songId, songData) {
    await Song.findByIdAndUpdate(songId, songData).lean();
    return await Song.findById(songId).lean();
};

async function likeSong(songId, userId) {
    const song = await Song.findById(songId);
    const user = await User.findById(userId);

    if (user._id == song.owner) {
        throw new Error('This is your song. You cannot like it.');
    }

    if (song.likes.includes(user._id)) {
        throw new Error('You have liked this song already.');
    }

    song.likes.push(userId);
    await song.save();

    user.favSongs.push(songId);
    await user.save();

    return await Song.findById(songId).lean();
};

module.exports = {
    getAllSongs,
    createSong,
    getSongById,
    editSong,
    deleteSong,
    likeSong
}

