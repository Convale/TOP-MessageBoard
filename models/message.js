const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;

const messageSchema = new Schema({
  user: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId, required: true },
  title: { type: String },
  text: { type: String, required: true },
  timestamp: { type: Date },
});

messageSchema.virtual("timestampFormatted").get(function () {
  return moment(this.timestamp).format("M/D/YYYY @ h:mm a");
});

module.exports = mongoose.model("messages", messageSchema);
