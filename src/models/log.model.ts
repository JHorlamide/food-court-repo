import { Knex } from "knex";

export interface Log {
  order_id: string;
  time: string;
  description: string;
}

export const createLogTable = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("log", (table) => {
    table.string("id").primary;
    table.timestamp("time");
    table.string("description");
  });
};
