const express = require('express')
const router = express.Router()
const professorsController = require('../controllers/ProfessorController')
const Upload = require('../helpers/uploadCurso')

router.post('/edit', Upload.single('imagem'), professorsController.editaProfessorPost)
router.get('/', professorsController.mostrarProfessors)
router.get('/create', professorsController.criarProfessor)
router.post('/create',Upload.single('imagem'), professorsController.criarProfessorPost)
router.get('/:id', professorsController.buscaProfessor)
router.post('/remove/:id', professorsController.removeProfessor)
router.get('/edit/:id', professorsController.editaProfessor)

module.exports = router
