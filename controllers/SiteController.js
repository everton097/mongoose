const Curso = require('../models/Curso')
const Professor = require('../models/Professores')
//const mongoose = require('mongoose')


module.exports = class SiteController {
  static async mostrarSite(req, res) {
    //Busca os dados dos cursos e envia para o site
    const cursos = await Curso.find({}).lean()
    const professors = await Professor.find({}).lean()


    res.render('site/index',{ cursos,professors, layout: false })
  }

}
