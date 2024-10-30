const Project = require("../models/projectModel");
const path = require("path");

exports.CreateProject = async (req, res) => {
  const project = await Project.create({});

  return res.json({
    project,
  });
};

exports.GetProjects = async (req, res) => {
  const projects = await Project.find({}, { _id: 1 });

  return res.json({
    success: true,
    projects,
  });
};

exports.Upload = async (req, res) => {
  try {
    const filePath = req.file?.path;
    const _id = req.body.id;
    const textBoxes = JSON.parse(req.body.textBoxes);
    const checkBoxes = JSON.parse(req.body.checkBoxes);
    const radioButtons = JSON.parse(req.body.radioButtons);
    const dropdowns = JSON.parse(req.body.dropdowns);

    let project = await Project.findOne({ _id });
    if (filePath) {
      project.filePath = filePath;
    }
    project.textBoxes = textBoxes;
    project.checkBoxes = checkBoxes;
    project.radioButtons = radioButtons;
    project.dropdowns = dropdowns;
    await project.save();

    return res.json({ success: true });
  } catch (err) {
    console.log("error", err);
    return res.status(500).json({ success: false });
  }
};

exports.GetProjectPDF = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findOne({ _id: id });

  if (!project || !project.filePath) {
    return res.status(500).json({ success: false });
  }

  res.sendFile(
    path.join(path.join(__dirname, ".."), project.filePath),
    (err) => {
      if (err) {
        res.status(500).json({ success: false });
      }
    }
  );
};

exports.GetProjectInfo = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findOne({ _id: id });

  return res.json({
    success: true,
    project,
  });
};
