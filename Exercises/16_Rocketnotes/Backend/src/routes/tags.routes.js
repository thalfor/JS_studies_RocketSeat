//
const { Router } = require("express");
const TagsController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const tagsRoutes = Router();
//
const tagsController = new TagsController();
//
tagsRoutes.get("/", ensureAuthenticated, tagsController.index);
//
module.exports = tagsRoutes;
//
