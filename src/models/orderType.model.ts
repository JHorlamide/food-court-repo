import { Knex } from "knex";

export interface OrderType {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export const createOrderTypeTable = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("order_type", (table) => {
    table.string("id").primary();
    table.string("name");
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};
