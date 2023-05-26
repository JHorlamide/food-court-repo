import Knex from "knex";
import config from "../config/appConfig";

const { mysql } = config;

const knex = Knex({
  client: mysql.client,
  connection: {
    host: mysql.host,
    port: mysql.port,
    user: mysql.user,
    password: mysql.password,
    database: mysql.database,
  },
});

// Raw SQL
/**
SELECT *
FROM `order`
LEFT JOIN `logs` ON `order`.`id` = `logs`.`order_id`
LEFT JOIN `calculatedOrder` ON `order`.`calculated_order_id` = `calculatedOrder`.`id`
**/
export const fetchAllOrders = async (): Promise<any[]> => {
  const orders = await knex("order")
    .select("*")
    .leftJoin("logs", "order.id", "logs.order_id")
    .leftJoin(
      "calculatedOrder",
      "order.calculated_order_id",
      "calculatedOrder.id",
    );

  return orders;
};

// Raw SQL
/**
SELECT meal, COUNT(meal) AS count
FROM `calculatedOrder`
GROUP BY meal
ORDER BY count DESC
LIMIT 1 
* **/
export const findMostBoughtMeal = async (): Promise<any[]> => {
  const result = await knex("calculatedOrder")
    .select("meal")
    .count("meal AS count")
    .groupBy("meal")
    .orderBy("count", "desc")
    .limit(1);

  return result;
};
