const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/setting", require("./routes/settingRoutes"));
app.use("/api/booking", require("./routes/bookingRoutes"));
app.use("/api/usertest",require('./routes/userTestRoutes'))

app.use(errorHandler);

app.listen(port, () => console.log(`Server is started on port ${port}`));
