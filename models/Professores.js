const mongoose = require('../db/conn')

const { Schema } = mongoose


const Professor = mongoose.model(
  'Professor',
  new Schema({
    nome: {
      type: String,
      required: true,
    },
    resumo: {
      type: String,
      required: true,
    },
    imagem: {
      type: String,
      required: false,
    },
  }),
)

module.exports = Professor
