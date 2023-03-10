const express = require("express");
const app = express();
app.use(express.json()); // Global Middleware

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.listen(3000);

const userModel = require("./models/userModel");
const planModel = require("./models/planModel");

const userRouter = require("./Routers/userRouter");
const planRouter = require("./Routers/planRouter");
const reviewRouter = require("./Routers/reviewRouter");
const bookingRouter = require("./Routers/bookingRouter");

app.use("/user", userRouter); // Base Route, Router to use
app.use("/plans", planRouter);
app.use("/review", reviewRouter);
app.use("/booking", bookingRouter);
