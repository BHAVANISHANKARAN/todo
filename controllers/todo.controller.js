import todoService from "../services/todo.service.js";

async function viewNotes(request, response) {
  var result = await todoService.viewNotesQuery();
  response.send(result);
}

async function addNotes(request, response) {
  var body = request.body;

  var result = await todoService.addNotesQuery(body);
  response.send(result);
}

async function updateNotes(request, response) {
  var { id } = request.params;
  //   const ans = request.body;
  var result = await todoService.updateNotesQuery(id);
  response.send({ msg: "Updated successfully" });
}

async function removeNotes(request, response) {
  var { id } = request.params;

  var result = await todoService.removeNotesQuery(id);
  response.send({ msg: "Deleted successfully" });
}

export default { viewNotes, addNotes, removeNotes, updateNotes };
