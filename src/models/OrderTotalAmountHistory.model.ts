import { Knex } from "knex";

export interface OrderTotalAmountHistory {
  order_id: string;
  time: string;
  total_amount: string;
}

export const crateOrderTotalAmountHistory = async (
  knex: Knex,
): Promise<void> => {
  await knex.schema.createTable("order_total_amount_history", (table) => {
    table.string("order_id");
    table.timestamp("time");
    table.string("total_amount");
  });
};
