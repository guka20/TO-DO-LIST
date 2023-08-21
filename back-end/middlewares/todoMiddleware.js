
const middlewares = {
  newTodo: (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    next();
  },
  updateTodo: (req, res, next) => {
    const { name } = req.body;
    const { id } = req.params;
    if (!name || !id) {
      return res.status(400).json({ error: "Name and ID are required" });
    }
    next();
  },
};
module.exports = middlewares;
