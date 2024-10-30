const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Upload, CreateProject, GetProjects, GetProjectPDF, GetProjectInfo } = require("../controllers/projectController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.route("/").get(GetProjects).post(CreateProject);
router.route("/save").post(upload.single("pdf"),Upload);
router.route("/pdf/:id").get(GetProjectPDF);
router.route("/info/:id").get(GetProjectInfo);

module.exports = router;
