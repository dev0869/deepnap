const bcrypt = require("bcrypt");
const saltRounds = 10;

//hashing password
const hashPassword = async (password) => {
  try {
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    return hashedpassword;
  } catch (error) {
    console.log(`error in hashpassword fun and the error is ${error}`.bgRed);
  }
};

//comparing password fun
const comparePassword = async (password, hashedpassword) => {
  try {
    return bcrypt.compare(password, hashedpassword);
  } catch (error) {
    console.log(`error in compare password fun and the error is ${error}`);
  }
};

module.exports = { hashPassword, comparePassword };
