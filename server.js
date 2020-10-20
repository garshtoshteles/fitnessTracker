const express = require("express"),
  mongoose = require("mongoose"),
  PORT = process.env.PORT || 3e3,
  app = express();
app.use(express.urlencoded({ extended: !0 })),
  app.use(express.json()),
  app.use(express.static("public")),
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: !0,
    useUnifiedTopology: !0,
    useCreateIndex: !0,
    useFindAndModify: !1,
  }),
  app.use(require("./routes/allRoutes.js")), // don't forget to make sure this connects properly
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
