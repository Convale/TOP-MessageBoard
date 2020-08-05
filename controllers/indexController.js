/* eslint-disable func-names */
const moment = require("moment");

// Preloaded messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    added_formatted: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    added_formatted: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
  },
];

// GET main page
exports.index = function (req, res) {
  res.render("index", {
    title: "Wonderful Messge Board",
    displayMessages: messages,
  });
};

// GET new page
exports.new_get = function (req, res) {
  res.render("newMessage", {
    title: "Wonderful Messge Board",
    displayMessages: messages,
  });
};

// POST new page
exports.new_post = function (req, res) {
  const { messageText, messageUser } = req.body;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
    added_formatted: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
  });

  res.redirect("/");
};
