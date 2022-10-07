const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const awsRoutes = require('./routes/awsRoutes')
const companyRoutes = require("./routes/companyRoutes");
const projectRoutes = require("./routes/projectRoutes");
const movieRoutes = require("./routes/movieRoutes");
const dotenv = require("dotenv").config();
const path = require("path")
// const s3Multer = require("multer-s3");
const aws = require("aws-sdk");
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use('/api/aws', awsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/movies", movieRoutes);


const __dirname = path.resolve();
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "client", "build", "index.html")
    )
  );
} 
else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

//app.use(notFound)
//app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// app.listen(port, () => console.log(`Server Started on port ${port}`));
