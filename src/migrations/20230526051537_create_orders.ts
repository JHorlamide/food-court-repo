import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("order", (table) => {
    table.string("id").primary();
    table.string("user_id");
    table.boolean("completed");
    table.boolean("cancelled");
    table.boolean("kitchen_cancelled");
    table.boolean("kitchen_accepted");
    table.boolean("kitchen_dispatched");
    table.timestamp("kitchen_dispatch_time");
    table.timestamp("completed_time");
    table.string("ride_id");
    table.boolean("kitchen_prepared");
    table.boolean("ride_assigned");
    table.boolean("paid");
    table.string("order_code");
    table.boolean("order_change");
    table.string("calculated_order_id");
    table.timestamp("created_at");
    table.timestamp("updated_at");
    table.timestamp("kitchen_verified_time");
    table.timestamp("kitchen_completed_time");
    table.boolean("shop_accepted");
    table.boolean("shop_prepared");
    table.string("no_of_mealbags_delivered");
    table.string("no_of_drinks_delivered");
    table.timestamp("rider_started_time");
    table.boolean("rider_started");
    table.timestamp("rider_arrived_time");
    table.boolean("rider_arrived_time");
    table.boolean("rider_arrived");
    table.boolean("is_failed_tripe");
    table.string("failed_trip_details");
    table.string("box_number");
    table.string("shelf_id");
    table.boolean("scheduled");
    table.bigInteger("confirm_by_id");
    table.bigInteger("completed_by_id");
    table.timestamp("scheduled_delivery_date");
    table.timestamp("scheduled_delivery_time");
    table.boolean("is_hidden");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("orders");
}
