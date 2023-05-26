import { Injectable } from "@nestjs/common";
import { connect, Connection, ConsumeMessage } from "amqplib";
import config from "src/config/appConfig";

@Injectable()
export class RabbitMQService {
  private connection: Connection;

  async init(): Promise<void> {
    this.connection = await connect(config.rabbitmq.host);
    const channel = await this.connection.createChannel();
    const queue = config.rabbitmq.queue;

    await channel.assertQueue(queue);
    channel.consume(queue, this.handleMessage.bind(this), { noAck: true });
  }

  handleMessage(message: ConsumeMessage | null): void {
    if (message) {
      console.log("Received message:", message.content.toString());
    }
  }

  async close(): Promise<void> {
    await this.connection.close();
  }
}
