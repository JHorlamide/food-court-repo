const config = {
  mysql: {
    client: "mysql",
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "food-court",
    port: 3306,
  },

  rabbitmq: {
    host: "amqp://localhost",
    queue: "myQueue",
  },
};

export default config;
