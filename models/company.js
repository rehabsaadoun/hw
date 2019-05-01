const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
    name : String,
    logo : String,
    address: String,
    city: String,
    telephone: Number,
    createdAt: Date,
    updatedAt: Date,


    drivers: [{ 
    name : string,
     age: number,
     image: string
    }],

Cars :[{
    name: string,
     model: number,
     year: number,
     image: string
}],
timestamps: true

})


const Company = mongoose.model('Company', companySchema)
module.exports = Company;

