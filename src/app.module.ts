import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RabbitMQService } from "./rabbitmq/rabbitmqService";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RabbitMQService],
})
export class AppModule {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  async onModuleInit(): Promise<void> {
    await this.rabbitMQService.init();
  }

  async onModuleDestroy(): Promise<void> {
    await this.rabbitMQService.close();
  }
}
