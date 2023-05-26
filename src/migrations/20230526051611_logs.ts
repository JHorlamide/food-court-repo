import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("log", (table) => {
    table.string("id").primary;
    table.timestamp("time");
    table.string("description");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("log");
}
