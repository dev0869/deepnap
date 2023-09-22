const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const env = require("dotenv");
const PORT = process.env.Port || 7001;

const connectDb = require("./config/dbconfig");
const authRoutes = require("./Routes/authRoute");
const userRoute = require("./Routes/userRoute");
const otpRoute = require("./Routes/otpRoute");
const quoterouter = require("./Routes/quotesRoute");
const adminRoute = require("./Routes/adminRoute");
const employeeRoute = require("./Routes/empRoute");
const careerRoute = require("./Routes/careerRoutes");
const contactRoute = require("./Routes/contactRoute");

const app = express();
env.config();
connectDb();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.use("/api/user", userRoute);
app.use("/api/otp", otpRoute);
app.use("/api/admin", adminRoute);
app.use("/api/employee", employeeRoute);
app.use("/api/auth", authRoutes);
app.use("/api/admin", quoterouter);
app.use("/api/admin", careerRoute);
app.use("/api/admin", contactRoute);


app.listen(PORT, "127.0.0.1", () => {
  console.log(`App is running on http://127.0.0.1:${PORT}/api`);
});
