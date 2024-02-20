import express from "express";
import todoController from "../controllers/todo.controller.js";

const router = express.Router();

router.route("/").get(todoController.viewNotes);
router.route("/").post(todoController.addNotes);
router.route("/:id").delete(todoController.removeNotes);
router.route("/:id").put(todoController.updateNotes);

export default router;
