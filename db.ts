import knex from "knex";
import knexfile from './knexfile'

//use dependency injection to inject knexfile.development into knex (dunno how yet)

const db = knex(knexfile.development);
export default db;