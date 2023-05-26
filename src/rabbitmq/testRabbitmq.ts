import { connect } from "amqplib";
import config from "../config/appConfig";

async function publishMessage() {
  const { rabbitmq } = config;
  const connection = await connect(rabbitmq.host);
  const channel = await connection.createChannel();
  const queue = rabbitmq;
  const message = "Hello, RabbitMQ!";

  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(message));

  await channel.close();
  await connection.close();
}

publishMessage();
