//
/*
Controller deve ter no máximo 5 métodos, caso precise de mais criar um novo.
- index = GET para listar vários registros.
- show - GET para exibir um registro específico.
- create - POST para criar um registro.
- update - PUT para atualizar um registro.
- delete - DELETE para remover um registro.
*/
//
const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const UserRepository = require("../repositories/UserRepository");
const UserCreateService = require("../services/UserCreateService");
//
class UsersController {
  //
  async create(request, response) {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(UserRepository);
    await userCreateService.execute({ name, email, password });

    return response.status(201).json();
  }
  //
  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    //const { id } = request.params; // não precisa mais pois fizemos o middleware ensureAuthenticated
    const user_id = request.user.id;

    const database = await sqliteConnection();
    const user = await database.get(`select * from users where id = (?)`, [
      user_id,
    ]);
    if (!user) {
      throw new AppError(`Usuário não encontrado`);
    }
    const userWithUpdatedEmail = await database.get(
      `select * from users where email = (?)`,
      [email]
    );
    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError(`este email já está em uso.`);
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError(`você precisa informar a senha anterior`);
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);
      if (!checkOldPassword) {
        throw new AppError(`a senha antiga não confere`);
      }
      user.password = await hash(password, 8);
    }

    await database.run(
      `update users set name = ?, email = ?, password = ?, updated_at = datetime('now') where id = ?`,
      [user.name, user.email, user.password, user_id]
    );
    return response.status(200).json();
  }
  //
}
//
module.exports = UsersController;
//
