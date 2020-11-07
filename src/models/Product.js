const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

//Iniciando um novo scheema
const ProductScheema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

//Paginação dos dados
ProductScheema.plugin(mongoosePaginate)

//Exportando o Scheema para ser usado na aplicação
mongoose.model('Product', ProductScheema)