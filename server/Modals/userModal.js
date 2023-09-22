const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[a-zA-Z\s]+$/.test(value);
        },
        message: (props) => `${props.value} is not a valid name.`,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
        },
        message: (props) => `${props.value} is not a valid email address.`,
      },
    },
    mobile: {
      type: String,
      required: true,
      validate: {
        validator: function(value) {
          return /^[1-9]\d{9}$/.test(value);
        },
        message: props => `${props.value} is not a valid mobile number.`
      }
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    super: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    order: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    refreshToken: {
      type: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpire: Date,
  },
  {
    timestamps: true,
  }
);

//bcript password
userSchema.pre("save", async function (next) {
  //bcript the password if it modified
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
//comapare password
userSchema.methods.isPasswordMatched = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};
//Reset Password Token
userSchema.methods.createPasswordResetToken = async function () {
  const resettoken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resettoken)
    .digest("hex");
  this.passwordResetExpire = Date.now() + 30 * 60 * 1000; //10 minute expire
  return resettoken;
};

module.exports = mongoose.model("User", userSchema);
