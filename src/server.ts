import { app } from "./app";
import { AppDataSource } from "./database/data-source";
import { env } from "./env";

async function start() {
  await AppDataSource.initialize();

  await app.listen({
    host: "0.0.0.0",
    port: env.PORT,
  });

  console.log("server is running now!");
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
