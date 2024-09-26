//
const creaetNotesTest = `
  create table if not exists notes (
	id integer primary key autoincrement,
  name varchar,
  email varchar,
  password varchar,
  avatar varchar null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp
)`;
//
module.exports = creaetNotesTest;
//
