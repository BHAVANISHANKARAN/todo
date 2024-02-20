import { Todo } from "../models/todo.model.js";

async function viewNotesQuery() {
  return await Todo.findAll();
}

async function addNotesQuery(body) {
  return await Todo.create(body);
}

async function updateNotesQuery(id) {
  return await Todo.update(
    { completed: "completed" },
    {
      where: {
        id: id,
      },
    }
  );
}

async function removeNotesQuery(id) {
  return await Todo.destroy({
    where: {
      id: id,
    },
  });
}

export default {
  viewNotesQuery,
  addNotesQuery,
  removeNotesQuery,
  updateNotesQuery,
};
