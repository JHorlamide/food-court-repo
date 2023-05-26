import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database: "food-court",
      user: "root",
      password: "1234",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/migrations",
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "food-court",
      user: "root-prod",
      password: "prod-pass-1234",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/migrations",
      tableName: "knex_migrations",
    },
  },
};

module.exports = config;
