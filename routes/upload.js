const express = require("express");

const auth = require("./../middleware/auth");
const router = express.Router();

const setName = (fileName) => {
  const random = Math.random().toString().substr(7);
  const extension = fileName.substring(fileName.length - 5);
  return random + extension;
};

router.post("/", (req, res) => {
  if (req.files === undefined) {
    return res.status(400).json({ msg: "No files were uploaded." });
  }
  let filePaths = [];

  if (req.files.file.length) {
    req.files.file.forEach((file) => {
      file.name = setName(file.name);
      filePaths.push(`uploads/${file.name}`);
      file.mv(
        `${__dirname}/../client/dist/client/uploads/${file.name}`,
        (err) => {
          if (err) {
            console.error(err.message);
            return res.status(500).send(err);
          }
        }
      );
    });
  } else {
    let file = req.files.file;
    file.name = setName(file.name);
    filePaths.push(`uploads/${file.name}`);
    file.mv(
      `${__dirname}/../client/dist/client/uploads/${file.name}`,
      (err) => {
        if (err) {
          console.error(err.message);
          return res.status(500).send(err);
        }
      }
    );
  }
  res.status(200).json({ filePaths: filePaths });
});

module.exports = router;
