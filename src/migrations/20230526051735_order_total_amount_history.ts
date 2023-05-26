import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("order_total_amount_history", (table) => {
    table.string("order_id");
    table.timestamp("time");
    table.string("total_amount");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("order_total_amount_history");
}
