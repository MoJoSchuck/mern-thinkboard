import express from "express";
import { getAllNotes, createNote, updateNote, deleteNote } from "../controllers/notesController.js"

const router = express.Router();

// Routes 
router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote );
router.post("/:id", deleteNote);

export default router;