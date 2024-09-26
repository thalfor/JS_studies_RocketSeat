//
require("dotenv/config");
require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const express = require("express");
const uploadConfig = require("./configs/upload");
const cors = require("cors");
//
const app = express();
app.use(cors());
app.use(express.json());
//
//quando coloca a pasta ele por padrão pega o index.js
const routes = require("./routes");
migrationsRun();
//
app.use("/files", express.static(uploadConfig.uploads_folder));
//
app.use(routes);
//
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  console.error(error);
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});
//
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
//
//
//
//
//
//
//
/*
//usar localhost:3333/message no navegador
app.get("/message", (request, response) => {
  response.send("Hellor world!");
});
*/
/*
//:id e :user são parâmetros obrigatórios
//ex: localhost:3333/message/6/thalfor
app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`ID da mensagem: ${id}. Para o usuário ${user}`);
});
*/
/*
//para query não precisa pré definir parâmetros
//ex: localhost:3333/users?page=10&limit=5 // ? separador da rota e & separador de parâmetros
app.get("/users", (request, response) => {
  const { page, limit } = request.query;
  response.send(`página: ${page}. Mostrar: ${limit}`);
});

//  response.send(`usuário: ${name}, email: ${email}, senha: ${password}`);
*/
//
