import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("order_type", (table) => {
    table.string("id").primary();
    table.string("name");
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("order_type");
}
