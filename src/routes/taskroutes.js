const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authmiddleware");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskcontroller");

router.post("/", verifyToken, createTask);
router.get("/", verifyToken, getTasks);
router.put("/:id", verifyToken, updateTask);
router.delete("/:id", verifyToken, deleteTask);

module.exports = router;
