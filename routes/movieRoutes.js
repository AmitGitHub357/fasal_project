const multer = require("multer");
const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/authenticate");
const {
    removeById,
    addedMoviesList,
    createMovieList,
    getByUserId,
    getByTitle,
    sendEmail

} = require("../controller/movieController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage: storage });
router.get("/:id", getByUserId)
router.get("/search/:title",getByTitle)
router.route("/").post(upload.fields([{ name: "images" }]),createMovieList);
router.get("/", addedMoviesList)
router.post("/sendEmail",sendEmail)
// router.post("/",upload.fields([{ name: "images" }]), createMovieList);
router.delete("/:id", removeById)
module.exports = router; 
