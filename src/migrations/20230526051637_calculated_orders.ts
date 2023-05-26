import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("calculated_order", (table) => {
    table.string("id").primary();
    table.string("total_amount");
    table.string("free_delivery");
    table.string("delivery_fee");
    table.string("service_charge");
    table.string("address_details");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("calculated_order");
}
