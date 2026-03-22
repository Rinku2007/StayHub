const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  role: {
  type: String,
  enum: ["user", "host", "admin"],
  default: "user"
}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);