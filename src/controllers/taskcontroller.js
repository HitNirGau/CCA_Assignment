const prisma = require("../config/database");

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId: req.userId,
      },
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: { userId: req.userId },
  });
  res.status(200).json(tasks);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id },
      data: { title, description, completed },
    });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: "Delete failed" });
  }
};
