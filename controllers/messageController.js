const messageModel = require("../models/message");

// GET newMessage page
exports.newMessage_get = (req, res) => {
  if (!req.user) {
    res.redirect("/");
  } else {
    res.render("newMessage", {
      user: req.user,
    });
  }
};

// POST newMessage page
exports.newMessage_post = (req, res) => {
  const { messageTitle, messageText } = req.body;
  const { firstname, lastname, _id } = req.user;

  const messageData = messageModel({
    title: messageTitle,
    text: messageText,
    user: `${firstname} ${lastname}`,
    userID: _id,
    timestamp: new Date(),
  });

  messageData.save((err) => {
    if (err) throw err;
  });

  res.redirect("/");
};

// POST deleteMessage page
exports.deleteMessage_post = (req, res) => {
  if (req.user.accesslevel > 5000) {
    messageModel.findByIdAndDelete(req.params.messageID, (err) => {
      if (err) throw err;
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
};
