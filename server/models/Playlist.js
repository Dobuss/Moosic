const { Schema, model } = require("mongoose");

const playlistSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name for this playlist"],
  },
  category: {
    type: String,
    required: [true, "Please add a category for this playlist"],
  },
  owner: { type: Types.ObjectId, ref: "User" },
  songs: { type: Array, default: [] },
  dateCreated: {
    type: String,
    required: true,
    default: () => new Date().toISOString(),
  },
});

const Playlist = model("Playlist", playlistSchema);
module.exports = Playlist;
