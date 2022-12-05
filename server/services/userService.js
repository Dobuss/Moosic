const User = require('../models/User');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "q390vnodzmgszdfgsdz";

async function register(username, email, password) {
  const userEmail = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (userEmail) {
    throw new Error("Email is taken already");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    hashedPassword,
  });
  return createSession(user);
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (!user) {
    throw new Error("Incorrect email or password");
  }
  const hasMatch = await bcrypt.compare(password, user.hashedPassword);
  if (hasMatch == false) {
    throw new Error("Incorrect email or password");
  }

  return createSession(user);
}

function createSession({ _id, username, email }) {
  const payload = {
    _id,
    username,
    email,
  };
  return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

async function getUserByEmail(email) {
    const user = User.findOne({ email });
    return await user.lean();
};

async function getUserByUsername(username) {
    const user = User.findOne({ username });
    return await user.lean();
};

async function getUserById(id) {
    const user = User.findById(id);
    return await user.lean();
};

module.exports = {
    register,
    getUserByEmail,
    getUserByUsername,
    getUserById,
    register,
    login,
    verifyToken,
}


