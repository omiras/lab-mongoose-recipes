const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

// TODO: CAMBIAR!!! Conversar el nombre de la base de datos /recipe-app
const MONGODB_URI = 'mongodb+srv://root:root@cluster0.lo8dg.mongodb.net/recipe-app';

main();

// Connection to the database "recipe-app"
async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log("Conectado correctamente a la base de datos.")

  // Borrar todas las recetas de la base de datos
  await Recipe.deleteMany();

  // Iteration 1
  // Iteration 2

  await mongoose.disconnect();
}
