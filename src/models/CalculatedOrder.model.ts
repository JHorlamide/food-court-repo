import { Knex } from "knex";

export interface CalculatedOrder {
  id: string;
  total_amount: string;
  free_delivery: string;
  delivery_fee: string;
  service_charge: string;
  address_details: string;
}

export const createCalculatedOrderTable = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("calculated_order", (table) => {
    table.string("id").primary();
    table.string("total_amount");
    table.string("free_delivery");
    table.string("delivery_fee");
    table.string("service_charge");
    table.string("address_details");
  });
};
