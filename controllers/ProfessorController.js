const Professor = require('../models/Professores')
const mongoose = require('mongoose')


module.exports = class ProfessorController {
  static async mostrarProfessors(req, res) {
    const professors = await Professor.find({}).lean()

    //console.log(Professors)

    res.render('professors/all', { professors })
  }

  static criarProfessor(req, res) {
    res.render('professors/create')
  }

  static async criarProfessorPost(req, res) {

    const nome = req.body.nome
    const resumo = req.body.resumo

    const imagem = req.file.filename
    const professor = new Professor({ nome, resumo, imagem })

    await professor.save()

    res.redirect('/professores')
  }

  static async buscaProfessor(req, res) {
    const id = req.params.id

    const professors = await Professor.findById(id).lean()

    //console.log(Professor)

    res.render('professors/detail', { professors })
  }

  static async removeProfessor(req, res) {
    const id = req.params.id

    await Professor.deleteOne({ _id: id })

    res.redirect('/professores')
  }

  static async editaProfessor(req, res) {
    const id = req.params.id

    const professors = await Professor.findById(id).lean()

    res.render('professors/edit', { professors })
  }

  static async editaProfessorPost(req, res) {
    const id = req.body.id; 

    const nome = req.body.nome
    const resumo = req.body.resumo

    if (req.file) {

      const imagem = req.file.filename
      var professors = { nome, resumo, imagem }
    }
    else {
      var professors = { nome, resumo }
    }

    await Professor.updateOne({ _id: id }, professors)

    res.redirect('/professores')
  }
}
