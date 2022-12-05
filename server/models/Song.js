const { Schema, model } = require("mongoose");

const songSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide song title"],
    minLength: [1, "Song name must be at least 1 character long"],
  },
  author: {
    type: String,
    required: [true, "Please provide author name"],
    minLength: [1, "Author name must be at least 1 character long"],
  },
  mood: {
    type: Array,
    default: [],
    required: [true, "Please add the respective mood tags"],
    minLength: [1, "There should be at least one mood tag"],
  },
  coverImg: {
    type: String,
    required: [true, "Please add an image for this song"],
  },
  rating: { type: Number, default: 0 },
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
  dateCreated: {
    type: String,
    required: true,
    default: () => new Date().toISOString(),
  },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Song = model("Song", songSchema);
module.exports = Song;

//Title, author, mood, owner (ref user), pic, player
